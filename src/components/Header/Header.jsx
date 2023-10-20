import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Avatar,
  Grid,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MovieIcon from "@mui/icons-material/Movie";
import AppsIcon from "@mui/icons-material/Apps";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import TheatersIcon from "@mui/icons-material/Theaters";
import { styled } from "@mui/system";
import theme from "../../theme.js";
import { StyledButton } from ".././Button/Button.jsx";
import { LuLogOut } from "react-icons/lu";
import { useUserContext } from "../../contexts/UserContext/UserContext.jsx";

const HeaderItem = styled("span")({
  fontWeight: 600,
  display: "inline-block",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.primary.main,
  },
});
const UserName = styled("span")({
  fontWeight: 600,
  marginLeft: "5px",
  transition: "0.3s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.primary.main,
  },
});

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleScrollTo = (id) => {
    const idToScroll = document.getElementById(id);
    if (idToScroll) {
      idToScroll.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    navigate("/");
  };
  // RESPONSIVE
  const isTabletScreen = useMediaQuery("(max-width:1024px)");

  const { currentUser, handleSignout } = useUserContext();
  return (
    <React.Fragment>
      <AppBar
        id="Header"
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
        color="inherit"
        position="sticky"
      >
        <Toolbar>
          {isTabletScreen ? (
            <>
              <Typography
                onClick={() => window.location.replace("/")}
                sx={{
                  fontStyle: "italic",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                UNITED CINEMA
              </Typography>
              <IconButton
                onClick={() => setOpen(true)}
                color="primary"
                sx={{ marginLeft: "auto" }}
                size="large"
              >
                <MenuIcon fontSize="large" />
              </IconButton>
              <Drawer
                sx={{
                  flexShrink: 0,
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                  },
                }}
                open={open}
                onClose={() => setOpen(false)}
              >
                <List>
                  {/* USER LOGIN SYSTEM */}
                  <ListItem>
                    {currentUser ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          gap: "20px",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div>
                            <Avatar
                              src="../../media/download.jpg"
                              alt={currentUser.hoTen}
                            />
                          </div>
                          <div>
                            <UserName>{currentUser.hoTen}</UserName>
                          </div>
                        </div>
                        <StyledButton
                          onClick={handleSignout}
                          variant="contained"
                          startIcon={<LuLogOut />}
                        >
                          ĐĂNG XUẤT
                        </StyledButton>
                      </div>
                    ) : (
                      <Stack direction="column" spacing={2}>
                        <StyledButton
                          onClick={() => navigate("/sign-in")}
                          variant="contained"
                        >
                          Đăng Nhập
                        </StyledButton>
                        <StyledButton
                          onClick={() => navigate("/sign-up")}
                          variant="contained"
                        >
                          Đăng Ký
                        </StyledButton>
                      </Stack>
                    )}
                  </ListItem>
                  <Divider />
                  {/* SHOWTIMES */}
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => handleScrollTo("LichChieu")}>
                      <ListItemIcon>
                        <MovieIcon />
                      </ListItemIcon>
                      <ListItemText primary="LỊCH CHIẾU" />
                    </ListItemButton>
                  </ListItem>
                  {/* THEATERSYS */}
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => handleScrollTo("CumRap")}>
                      <ListItemIcon>
                        <TheatersIcon />
                      </ListItemIcon>
                      <ListItemText primary="CỤM RẠP" />
                    </ListItemButton>
                  </ListItem>
                  {/* NEWS */}
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <NewspaperIcon />
                      </ListItemIcon>
                      <ListItemText primary="TIN TỨC" />
                    </ListItemButton>
                  </ListItem>
                  {/* HOME APP */}
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => handleScrollTo("UngDung")}>
                      <ListItemIcon>
                        <AppsIcon />
                      </ListItemIcon>
                      <ListItemText primary="ỨNG DỤNG" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item xs={4}>
                {/* logo */}
                <Typography
                  onClick={() => window.location.replace("/")}
                  sx={{
                    fontStyle: "italic",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  UNITED CINEMA
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  sx={{ display: "flex", listStyle: "none" }}
                  variant="ul"
                >
                  <Typography variant="li" sx={{ margin: "auto" }}>
                    <HeaderItem onClick={() => handleScrollTo("LichChieu")}>
                      Lịch Chiếu
                    </HeaderItem>
                  </Typography>
                  <Typography variant="li" sx={{ margin: "auto" }}>
                    <HeaderItem onClick={() => handleScrollTo("CumRap")}>
                      Cụm Rạp
                    </HeaderItem>
                  </Typography>
                  <Typography variant="li" sx={{ margin: "auto" }}>
                    <HeaderItem>Tin Tức</HeaderItem>
                  </Typography>
                  <Typography variant="li" sx={{ margin: "auto" }}>
                    <HeaderItem onClick={() => handleScrollTo("UngDung")}>
                      Ứng Dụng
                    </HeaderItem>
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                {currentUser ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      gap: "30px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div>
                        <Avatar
                          src="../../media/download.jpg"
                          alt={currentUser.hoTen}
                        />
                      </div>
                      <div>
                        <UserName>{currentUser.hoTen}</UserName>
                      </div>
                    </div>
                    <StyledButton
                      onClick={handleSignout}
                      variant="contained"
                      startIcon={<LuLogOut />}
                    >
                      ĐĂNG XUẤT
                    </StyledButton>
                  </div>
                ) : (
                  <Stack
                    direction="row"
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                    spacing={2}
                  >
                    <StyledButton
                      onClick={() => navigate("/sign-in")}
                      variant="contained"
                    >
                      Đăng Nhập
                    </StyledButton>
                    <StyledButton
                      onClick={() => navigate("/sign-up")}
                      variant="contained"
                    >
                      Đăng Ký
                    </StyledButton>
                  </Stack>
                )}
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
