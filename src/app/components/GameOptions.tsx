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
  onPlay,
}: {
  isGameStarted: boolean;
  isUnder: boolean;
  diceValue: number;
  setDiceValue: (value: number) => void;
  setIsUnder: (value: boolean) => void;
  onPlay: () => void;
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
            onChange={() => setIsUnder(true)}
          />
          <FormControlLabel
            value="over"
            control={<Radio />}
            label="Over"
            labelPlacement="start"
            checked={!isUnder}
            onChange={() => setIsUnder(false)}
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
          min={1}
          max={99}
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
          <Typography>1</Typography>
          <Typography>99</Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ width: "320px", height: "42px" }}
        onClick={onPlay}
        disabled={isGameStarted}
        loading={isGameStarted}
      >
        Play
      </Button>
    </Box>
  );
}
