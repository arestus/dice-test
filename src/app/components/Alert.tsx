import { Alert, Container, Typography } from "@mui/material";

export default function CustomAlert({
  type,
  failureReason,
}: {
  type: "success" | "error";
  failureReason?: string;
}) {
  return (
    <Container maxWidth="md">
      <Alert
        severity={type}
        variant="filled"
        sx={{
          width: "60%",
          margin: "20px auto",
          maxWidth: "600px",
          maxHeight: "76px",
        }}
      >
        <Typography sx={{ fontSize: "16px" }}>
          {type === "success" ? "You won" : "You lost"}
        </Typography>
        {type === "error" && (
          <Typography sx={{ fontSize: "14px" }}>{failureReason}</Typography>
        )}
      </Alert>
    </Container>
  );
}
