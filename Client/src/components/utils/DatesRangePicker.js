import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import DateSelector from "./DateSelector";
import BuildIcon from "@mui/icons-material/Build";

export default function DatesRangePicker({
  fromDate,
  toDate,
  setFromDate,
  setToDate,
  onBuildModel,
}) {
  return (
    <Box
      sx={{
        textAlign: "center",
        // border: "3px dashed silver",
        borderRadius: 2,
        pl: 2,
        display: "flex",
      }}>
      <Typography sx={{ mt: 3 }}>from</Typography>
      <DateSelector date={fromDate} setDate={setFromDate} />
      <Typography sx={{ mt: 3 }}>to</Typography>
      <DateSelector date={toDate} setDate={setToDate} />
      <Tooltip title='Build Model'>
        <IconButton sx={{ m: 2 }} onClick={onBuildModel}>
          <BuildIcon sx={{ color: "#36454f" }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
