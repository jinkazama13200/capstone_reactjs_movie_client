import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCinemaSystem, getTheaterById } from "../../../apis/cinemaAPI";
import {
  Container,
  Box,
  Tabs,
  Tab,
  Avatar,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import theme from "../../../theme";
import Br from "../../../components/Br/Br";
import { useNavigate } from "react-router-dom";
import {
  CustomLink,
  MovieDate,
  MovieTime,
  MovieDateDiv,
} from "../../../components/Link/Link";
import LoadingPage from "../../../components/LoadingPage/LoadingPage";

const CustomTypo = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const CustomTab = styled(Tab)`
  &.Mui-selected {
    opacity: 1;
  }
  opacity: 0.6;
  padding: 30px;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    height: 1px;
    width: 80%;
    bottom: 0;
    background-color: lightgrey;
  }
`;
const CustomTheaterTab = styled(Tab)`
  &.Mui-selected {
    opacity: 1;
  }
  opacity: 0.6;
  &::after {
    position: absolute;
    content: "";
    height: 1px;
    width: 80%;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: lightgrey;
  }
`;
const CustomDiv = styled("div")`
  width: 100%;
  text-align: left;
  height: 76px;
  position: relative;
`;
const MovieItem = styled("div")`
  display: flex;
  padding: 20px;
  gap: 20px;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    height: 1px;
    width: 80%;
    bottom: 0;
    background-color: lightgrey;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
const MovieDateItem = styled("div")`
  flex-wrap: wrap;
`;
const AgeLimited = styled("span")`
  display: inline-block;
  padding: 3px 5px;
  background-color: #ff0000;
  color: white;
  border-radius: 5px;
  margin-right: 5px;
`;

function TabPanel(props) {
  const { children, valueCinema, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={valueCinema !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {valueCinema === index && (
        <Box
          sx={{
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "lightgray",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "darkgray",
              borderRadius: "4px",
            },
            height: 700,
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

function TabPanelTheater(props) {
  const { children, valueTheater, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={valueTheater !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {valueTheater === index && (
        <Box
          sx={{
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "lightgray",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "darkgray",
              borderRadius: "4px",
            },
            height: 700,
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

export default function CinemaSystems() {
  const navigate = useNavigate();
  const [valueCinema, setValueCinema] = useState(0);
  const [valueTheater, setValueTheater] = useState(0);
  const [theater, setTheater] = useState([]);

  const isMobileScreen = useMediaQuery("(max-width:600px)");

  const { data: cinemaSys = [], isLoading } = useQuery({
    queryKey: ["cinemaLogo"],
    queryFn: getCinemaSystem,
  });

  const { mutate: handleGetTheaterById } = useMutation({
    mutationFn: (cinemaId) => getTheaterById(cinemaId),
    onSuccess: (data) => {
      setTheater(data);
    },
  });

  const handleChangeCinema = (e, value) => {
    setValueCinema(value);
    setValueTheater(0);
  };
  const handleChangeTheater = (e, value) => {
    setValueTheater(value);
  };

  const renderCinemaLogo = (arr) => {
    return arr.map((item) => {
      return (
        <CustomTab
          key={item.maHeThongRap}
          icon={<Avatar src={item.logo} alt={item.tenHeThongRap} />}
          onClick={() => handleGetTheaterById(item.maHeThongRap)}
        />
      );
    });
  };
  const renderTheaterList = (arr) => {
    return arr.map((item) => {
      return (
        <TabPanel
          key={item.maHeThongRap}
          valueCinema={valueCinema}
          index={valueCinema}
        >
          <Tabs
            textColor="primary"
            sx={{ borderRight: 1, borderColor: "divider" }}
            TabIndicatorProps={{
              style: { background: theme.palette.primary.main },
            }}
            orientation="vertical"
            value={valueTheater}
            onChange={handleChangeTheater}
          >
            {theater ? renderTheaterById(theater[0].lstCumRap) : null}
          </Tabs>
        </TabPanel>
      );
    });
  };
  const renderTheaterById = (arr) => {
    return arr.map((item) => {
      return (
        <CustomTheaterTab
          key={item.maCumRap}
          label={
            <CustomDiv>
              <CustomTypo
                sx={{
                  fontSize: 20,
                  color: theme.palette.primary.main,
                }}
                variant="h5"
              >
                {item.tenCumRap}
              </CustomTypo>
              <CustomTypo sx={{ fontSize: 15, color: "gray" }} variant="h6">
                {item.diaChi}
              </CustomTypo>
              <CustomTypo sx={{ color: "red" }} variant="span">
                [Chi tiết]
              </CustomTypo>
            </CustomDiv>
          }
        />
      );
    });
  };
  const renderMovieList = (arr) => {
    return arr.map((item) => {
      return (
        <MovieItem key={item.maPhim}>
          <img
            width={130}
            height={200}
            style={{ objectFit: "cover" }}
            src={item.hinhAnh}
            alt={item.tenPhim}
          />
          <div>
            <Typography
              sx={{ fontSize: 20, fontWeight: "bold", marginBottom: 3 }}
              variant="h5"
            >
              <AgeLimited>C18</AgeLimited>
              {item.tenPhim}
            </Typography>
            <MovieDateItem>
              {item.lstLichChieuTheoPhim.map((value) => {
                const time = dayjs(value.ngayChieuGioChieu).format("HH:mm");
                const date = dayjs(value.ngayChieuGioChieu).format(
                  "YYYY-MM-DD"
                );
                return (
                  <CustomLink
                    onClick={() => navigate(`/tickets/${value.maLichChieu}`)}
                    style={{
                      display: "inline-block",
                      backgroundColor: "lightgrey",
                      padding: "3px 8px",
                      marginRight: 20,
                      marginBottom: 20,
                      borderRadius: 5,
                      textDecoration: "none",
                    }}
                    key={value.maLichChieu}
                  >
                    <MovieDateDiv>
                      <MovieDate>{date}</MovieDate>
                      <Typography>~</Typography>
                      <MovieTime>{time}</MovieTime>
                    </MovieDateDiv>
                  </CustomLink>
                );
              })}
            </MovieDateItem>
          </div>
        </MovieItem>
      );
    });
  };

  useEffect(() => {
    handleGetTheaterById("BHDStar");
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Container>
      {isMobileScreen ? null : (
        <React.Fragment>
          <Br />
          <Box
            id="CumRap"
            sx={{
              border: 1,
              borderColor: "divider",
              flexGrow: 1,
              display: "flex",
              height: 700,
              overflow: "hidden",
              marginBottom: "50px",
            }}
          >
            <Grid container>
              <Grid item sm={2} md={2} lg={1}>
                <Tabs
                  sx={{ borderRight: 1, borderColor: "divider" }}
                  value={valueCinema}
                  onChange={handleChangeCinema}
                  TabIndicatorProps={{
                    style: { background: theme.palette.primary.main },
                  }}
                  orientation="vertical"
                >
                  {cinemaSys ? renderCinemaLogo(cinemaSys) : null}
                </Tabs>
              </Grid>
              <Grid item sm={4} md={4} lg={3}>
                <Box
                  sx={{
                    height: 700,
                    borderRight: 1,
                    borderColor: "divider",
                  }}
                >
                  {cinemaSys && renderTheaterList(theater)}
                </Box>
              </Grid>
              <Grid item sm={6} md={6} lg={8}>
                <TabPanelTheater
                  valueTheater={valueTheater}
                  index={valueTheater}
                >
                  {theater.length > 0
                    ? renderMovieList(
                        theater[0].lstCumRap[valueTheater].danhSachPhim
                      )
                    : null}
                </TabPanelTheater>
              </Grid>
            </Grid>
          </Box>
        </React.Fragment>
      )}
    </Container>
  );
}
