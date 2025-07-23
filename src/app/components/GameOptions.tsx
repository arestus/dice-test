import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box, Button, Slider, Typography } from "@mui/material";

export default function GameOptions({
  isGameStarted,
  isUnder,
  diceValue,
  setDiceValue,
  setIsUnder,
}: {
  isGameStarted: boolean;
  isUnder: boolean;
  diceValue: number;
  setDiceValue: (value: number) => void;
  setIsUnder: (value: boolean) => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <RadioGroup
          row
          aria-labelledby="game-options-label"
          name="game-options"
        >
          <FormControlLabel
            value="under"
            control={<Radio />}
            label="Under"
            labelPlacement="start"
            checked={isUnder}
            onChange={() => setIsUnder(!isUnder)}
          />
          <FormControlLabel
            value="over"
            control={<Radio />}
            label="Over"
            labelPlacement="start"
            checked={!isUnder}
            onChange={() => setIsUnder(!isUnder)}
          />
        </RadioGroup>
      </FormControl>
      <Box>
        <Slider
          defaultValue={diceValue}
          aria-label="Default"
          valueLabelDisplay="auto"
          sx={{ width: "320px" }}
          value={diceValue}
          onChange={(event, newValue) => setDiceValue(newValue as number)}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          <Typography>0</Typography>
          <Typography>100</Typography>
        </Box>
      </Box>
      <Button
        disabled={isGameStarted}
        variant="contained"
        color="primary"
        sx={{ width: "320px", height: "42px" }}
      >
        Play
      </Button>
    </Box>
  );
}
