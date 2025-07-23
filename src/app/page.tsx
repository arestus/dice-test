import {
  CustomAlert,
  GameOptions,
  ResultField,
  ResultsHistory,
} from "@/app/components";
import { Container } from "@mui/material";

export default function Home() {
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
        <GameOptions />
        <ResultsHistory />
      </Container>
    </div>
  );
}
