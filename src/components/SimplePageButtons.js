import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function SimplePageButtons({ setList, listItems, count, pageSize = 18 }) {
    function handleChange(start) {
        const end = start + pageSize
        setList(listItems.slice(start, end))
    }

    return (
        <Stack spacing={2} sx={{padding: 3}} >
            <Pagination
            count={count}
            variant="outlined"
            shape="rounded"
            onChange={(_, page) => handleChange((page - 1) * pageSize)}
            />
        </Stack>
    )
}

export default SimplePageButtons