"use client";

import {
  CustomAlert,
  GameOptions,
  ResultField,
  ResultsHistory,
} from "@/app/components";
import { Box, Container } from "@mui/material";
import { AlertMessage, ResultHistory } from "./components/types";
import { useState, useRef, useEffect } from "react";
import { OVER, REASON_MESSAGE, UNDER } from "../../constants";

export default function Home() {
  const [result, setResult] = useState<ResultHistory[]>([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isUnder, setIsUnder] = useState(false);
  const [diceValue, setDiceValue] = useState(50);
  const [currentResult, setCurrentResult] = useState<number | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState<{
    type: AlertMessage;
    reason?: string;
  }>({ type: "success", reason: "" });
  const alertTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (alertTimeoutRef.current) {
        clearTimeout(alertTimeoutRef.current);
      }
    };
  }, []);

  const playGame = async () => {
    setIsGameStarted(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const gameResult = Math.floor(Math.random() * 100) + 1;
    setCurrentResult(gameResult);

    const isWin = isUnder ? gameResult < diceValue : gameResult > diceValue;

    const newEntry: ResultHistory = {
      time: new Date().toLocaleTimeString(),
      guess: `${isUnder ? UNDER : OVER} ${diceValue}`,
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
            reason: isUnder ? REASON_MESSAGE.UNDER : REASON_MESSAGE.OVER,
          }
    );
    setShowAlert(true);

    if (alertTimeoutRef.current) {
      clearTimeout(alertTimeoutRef.current);
    }

    alertTimeoutRef.current = setTimeout(() => {
      setShowAlert(false);
      alertTimeoutRef.current = null;
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
