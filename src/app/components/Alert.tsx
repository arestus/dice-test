import { Alert, Container, Typography } from "@mui/material";
import { AlertMessage } from "./types";
import { ALERT_MESSAGE, TYPE } from "../../../constants";

export default function CustomAlert({
  type,
  failureReason,
}: {
  type: AlertMessage;
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
          {type === TYPE.SUCCESS ? ALERT_MESSAGE.SUCCESS : ALERT_MESSAGE.ERROR}
        </Typography>
        {type === TYPE.ERROR && (
          <Typography sx={{ fontSize: "14px" }}>{failureReason}</Typography>
        )}
      </Alert>
    </Container>
  );
}
