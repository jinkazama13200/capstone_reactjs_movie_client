import React from "react";
import theme from "../../theme";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledButton = styled(Button)({
  backgroundColor: theme.palette.primary.main,
  color: "white",
});
