import { Box, Card, CardContent, Typography } from "@mui/material";

export default function ResultField() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          width: "320px",
          height: "200px",
          backgroundColor: "#0000000A",
          borderRadius: "10px",
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "96px", fontWeight: 300 }}>100</Typography>
      </Card>
    </Box>
  );
}
