import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SortSelect() {
  const [filter, setFilter] = React.useState('-');

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Sort By:</InputLabel>
        <Select
          value={filter}
          onChange={handleChange}
        >
          <MenuItem value={"-"}>No filter</MenuItem>
          <MenuItem value={"Id"}>Id</MenuItem>
          <MenuItem value={"FirstName"}>Firstname</MenuItem>
          <MenuItem value={"LastName"}>Lastname</MenuItem>
          <MenuItem value={"GradeAvg"}>Grades Average</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}