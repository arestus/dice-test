"use client";

import {
  CustomAlert,
  GameOptions,
  ResultField,
  ResultsHistory,
} from "@/app/components";
import { Box, Container } from "@mui/material";
import { ResultHistory } from "./components/types";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState<ResultHistory[]>([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isUnder, setIsUnder] = useState(false);
  const [diceValue, setDiceValue] = useState(50);
  const [currentResult, setCurrentResult] = useState<number | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState<{
    type: "success" | "error";
    reason?: string;
  }>({ type: "success", reason: "" });

  const playGame = async () => {
    setIsGameStarted(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const gameResult = Math.floor(Math.random() * 100) + 1;
    setCurrentResult(gameResult);

    const isWin = isUnder ? gameResult < diceValue : gameResult > diceValue;

    const newEntry: ResultHistory = {
      time: new Date().toLocaleTimeString(),
      guess: `${isUnder ? "Under" : "Over"} ${diceValue}`,
      result: `${gameResult} - ${isWin ? "Win" : "Loss"}`,
    };

    setResult((prevResult) => {
      const newResult = [newEntry, ...prevResult];
      return newResult.slice(0, 10);
    });

    setAlertMessage(
      isWin
        ? { type: "success", reason: "" }
        : {
            type: "error",
            reason: isUnder ? "Number was higher" : "Number was lower",
          }
    );
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    setIsGameStarted(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          minHeight: "120px",
        }}
      >
        {showAlert && (
          <CustomAlert
            type={alertMessage.type}
            failureReason={alertMessage.reason}
          />
        )}
      </Box>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <ResultField currentResult={currentResult} />
        <GameOptions
          isGameStarted={isGameStarted}
          isUnder={isUnder}
          diceValue={diceValue}
          setDiceValue={setDiceValue}
          setIsUnder={setIsUnder}
          onPlay={playGame}
        />
        <ResultsHistory history={result} />
      </Container>
    </div>
  );
}
