import { Alert, Container } from "@mui/material";

export default function CustomAlert({
  type,
  failureReason,
}: {
  type: "success" | "error";
  failureReason: string;
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
        {failureReason}
      </Alert>
    </Container>
  );
}
