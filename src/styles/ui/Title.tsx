import { Typography, TypographyProps } from "@mui/material";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
  variant: TypographyProps["variant"];
}

const Title: React.FC<TitleProps> = ({ children, variant }) => {
  return (
    //For material UI you can create your own custom theme. check the documentation.
    <Typography
      variant={variant}
      sx={{
        fontWeight: "500",
        fontFamily: "Poppins",
        textAlign: "center",
      }}
    >
      {children}
    </Typography>
  );
};

export default Title;
