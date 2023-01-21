import { useState } from "react";
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
  Box,
} from "@mui/material";
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
  branches,
  currentStore,
  setCurrentStore,
  date,
  setDate,
  onSearch,
}) {
  const [isloaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  return (
    <Box
      sx={{
        textAlign: "center",
        border: "1px solid silver",
        borderRadius: 1,
        p: 1,
        display: "flex",
      }}>
      <FormControl size='small' sx={{ m: 2, width: 200 }}>
        <InputLabel>Branch</InputLabel>
        <Select
          value={currentStore}
          label='Branch'
          onChange={(event) => setCurrentStore(event.target.value)}
          MenuProps={MenuProps}>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {branches.map((item) => {
            return (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <DateSelector date={date} setDate={setDate} />
      <Button
        size='small'
        sx={{ m: 1 }}
        variant='contained'
        color='success'
        onClick={onSearch}>
        Search
      </Button>
    </Box>
  );
}
