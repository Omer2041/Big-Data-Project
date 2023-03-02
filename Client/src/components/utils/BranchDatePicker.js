import { useState } from "react";
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
  Box,
  IconButton,
  ButtonGroup,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import DateSelector from "./DateSelector";
import Branches from "../config/branches";
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
  currentBranch,
  setCurrentBranch,
  date,
  setDate,
  onSearch,
  showAllOrders,
}) {
  return (
    <Box
      sx={{
        textAlign: "center",
        // border: "3px dashed white",
        borderRadius: 2,
        display: "flex",
      }}>
      <FormControl size='small' sx={{ m: 2, width: "35%" }}>
        <InputLabel>Branch</InputLabel>
        <Select
          value={currentBranch}
          label='Branch'
          onChange={(event) => setCurrentBranch(event.target.value)}
          MenuProps={MenuProps}>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {Branches.map((item) => {
            return (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <DateSelector date={date} setDate={setDate} />
      <Tooltip title='Search'>
        <IconButton color='primary' sx={{ m: 2 }} onClick={onSearch}>
          <SearchIcon sx={{ color: "#353839" }} />
        </IconButton>
      </Tooltip>
      <Tooltip title='Show All Orders'>
        <IconButton color='primary' sx={{ m: 2 }} onClick={showAllOrders}>
          <BorderAllIcon sx={{ color: "#36454f" }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
