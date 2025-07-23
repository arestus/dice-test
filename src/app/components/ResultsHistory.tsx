import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import { ResultHistory } from "./types";

export default function ResultsHistory({
  history,
}: {
  history: ResultHistory[];
}) {
  return (
    <TableContainer
      sx={{ border: "none", alignItems: "center", maxWidth: "600px" }}
    >
      <Table
        sx={{ maxWidth: "100%", border: "none" }}
        aria-label="game history table"
      >
        <TableHead sx={{ border: "none" }}>
          <TableRow>
            <TableCell
              align="left"
              sx={{ fontSize: "16px", fontWeight: "bold" }}
            >
              Time
            </TableCell>
            <TableCell
              align="left"
              sx={{ fontSize: "16px", fontWeight: "bold" }}
            >
              Guess
            </TableCell>
            <TableCell
              align="left"
              sx={{ fontSize: "16px", fontWeight: "bold" }}
            >
              Result
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3} align="center">
                <Typography variant="body2" color="text.secondary">
                  No games played yet. Start playing to see your history!
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            history.map((entry, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {entry.time.slice(0, -2)}
                </TableCell>
                <TableCell align="left">{entry.guess}</TableCell>
                <TableCell
                  align="left"
                  sx={{
                    color: entry.result.slice(-3) === "Win" ? "green" : "red",
                  }}
                >
                  {entry.result.slice(0, 2)}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
