import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box, Button, Slider, Typography } from "@mui/material";

export default function GameOptions() {
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
          />
          <FormControlLabel
            value="over"
            control={<Radio />}
            label="Over"
            labelPlacement="start"
          />
        </RadioGroup>
      </FormControl>
      <Box>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
          sx={{ width: "320px" }}
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
        variant="contained"
        color="primary"
        sx={{ width: "320px", height: "42px" }}
      >
        Play
      </Button>
    </Box>
  );
}
