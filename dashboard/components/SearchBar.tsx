import { Container, InputAdornment, TextField } from "@mui/material";
import { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { globalContext } from "@/context/globalContext";

export default function SearchBar() {
  const { searchFilter, setSearchFilter } = useContext(globalContext)

  return (
    <Container maxWidth="md" sx={{ mt: 0 }}>
      <TextField
        id="search"
        type="search"
        label="Lastname Search"
        value={searchFilter}
        onChange={(e: any) => {setSearchFilter(e.target.value)}}
        sx={{ width: 300 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}