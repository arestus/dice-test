"use client";

import {
  CustomAlert,
  GameOptions,
  ResultField,
  ResultsHistory,
} from "@/app/components";
import { Container } from "@mui/material";
import { ResultHistory } from "./components/types";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState<ResultHistory[]>([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isUnder, setIsUnder] = useState(false);
  const [diceValue, setDiceValue] = useState(0);

  const handleGameStart = () => {
    setIsGameStarted(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <CustomAlert
        type="success"
        failureReason="This is an error alert — check it out!"
      />
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
        <ResultField />
        <GameOptions
          isGameStarted={isGameStarted}
          isUnder={isUnder}
          diceValue={diceValue}
          setDiceValue={setDiceValue}
          setIsUnder={setIsUnder}
        />
        <ResultsHistory />
      </Container>
    </div>
  );
}
