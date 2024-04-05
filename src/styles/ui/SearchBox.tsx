import { Paper, InputBase } from "@mui/material";

const SearchBox = () => {
  return (
    <Paper sx={{ display: "flex", width: 200, py: 1 }}>
      <InputBase
        sx={{ ml: 1, fontSize: "12px" }}
        placeholder="Search"
        type="text"
      />
    </Paper>
  );
};

export default SearchBox;
