import { Button, Box, Typography } from "@mui/material";
import DateSelector from "./DateSelector";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

export default function BranchDatePicker({
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
        border: "1px solid silver",
        borderRadius: 1,
        p: 1,
        display: "flex",
      }}>
      <Typography sx={{ mt: 3 }}>from</Typography>
      <DateSelector fromDate={fromDate} setFromDate={setFromDate} />
      <Typography sx={{ mt: 3 }}>to</Typography>
      <DateSelector toDate={toDate} setDate={setToDate} />
      <Button
        size='small'
        sx={{ m: 1 }}
        variant='contained'
        color='success'
        onClick={onBuildModel}>
        Build Model
      </Button>
    </Box>
  );
}
