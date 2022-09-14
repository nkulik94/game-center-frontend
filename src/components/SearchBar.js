import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

function SearchBar({ searched, setSearched }) {
    return (
        <FormControl sx={{marginTop: 2}}>
            <Input
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            }
            placeholder="Search Games"
            value={searched}
            onChange={e => setSearched(e.target.value)}
            />
        </FormControl>
    )
}

export default SearchBar