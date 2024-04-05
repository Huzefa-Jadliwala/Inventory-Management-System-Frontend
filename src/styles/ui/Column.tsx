import { Grid, Box } from "@mui/material";
import React from "react";

interface ColumnProps {
  children: React.ReactNode;
  spacing?: number;
}

const Column: React.FC<ColumnProps> = ({ children, spacing = 2 }) => {
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => (
      <Box key={index} mb={spacing}>
        {child}
      </Box>
    ));
  };

  return (
    <Grid
      container
      direction="column"
      sx={{
        marginRight: "1.2rem", // Right margin for the whole column
      }}
    >
      {renderChildren()}
    </Grid>
  );
};

export default Column;
