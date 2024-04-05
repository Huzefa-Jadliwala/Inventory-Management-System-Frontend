import { Grid } from "@mui/material";
import React from "react";

interface RowProps {
  children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ children }) => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1.2rem",
      }}
    >
      {children}
    </Grid>
  );
};

export default Row;
