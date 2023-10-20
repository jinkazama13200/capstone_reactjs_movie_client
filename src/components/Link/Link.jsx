import { Button } from "@mui/material";
import theme from "../../theme";
import { styled } from "@mui/system";

export const CustomLink = styled(Button)({
  display: "inline-block",
  backgroundColor: "lightgrey",
  padding: "3px 8px",
  marginRight: 20,
  marginBottom: 20,
  borderRadius: 5,
  textDecoration: "none",
  cursor: "pointer",
  transition: "0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
});
export const MovieDateDiv = styled("div")({
  display: "flex",
});
export const MovieDate = styled("p")({
  color: "green",
  margin: 0,
});
export const MovieTime = styled("p")({
  color: theme.palette.primary.main,
  margin: 0,
  fontWeight: "bold",
});
