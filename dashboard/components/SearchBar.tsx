import { Container, InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, useContext } from "react";
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
        onChange={(e: ChangeEvent<HTMLInputElement>) => { setSearchFilter(e.target.value) }}
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