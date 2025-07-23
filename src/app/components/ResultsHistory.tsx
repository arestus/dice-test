import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function ResultsHistory() {
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <TableContainer
      sx={{ border: "none", alignItems: "center", maxWidth: "600px" }}
    >
      <Table
        sx={{ maxWidth: "100%", border: "none" }}
        aria-label="simple table"
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
