import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { globalContext } from '@/context/globalContext';

type Props = {
  filterStudents: any
}

export default function SortSelect({filterStudents}: Props) {
  const [filter, setFilter] = useState('Id');
  const {setSortFilter} = useContext(globalContext)
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
          <MenuItem value={"Id"} onClick={() => {setSortFilter("id"); filterStudents()}}>Id</MenuItem>
          <MenuItem value={"FirstName"} onClick={() => {setSortFilter("firstname"); filterStudents()}}>Firstname</MenuItem>
          <MenuItem value={"LastName"} onClick={() => {setSortFilter("lastname"); filterStudents()}}>Lastname</MenuItem>
          <MenuItem value={"GradeAvg"} onClick={() => {setSortFilter("gradeAvg"); filterStudents()}}>Grades Average</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}