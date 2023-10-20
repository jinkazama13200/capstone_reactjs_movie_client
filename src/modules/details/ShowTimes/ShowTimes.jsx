import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import theme from "../../../theme";
import {
  CssBaseline,
  Container,
  Box,
  Tab,
  Tabs,
  Grid,
  Typography,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";
import dayjs from "dayjs";
import { getCinemaShowTimes } from "../../../apis/cinemaAPI";
import {
  CustomLink,
  MovieDateDiv,
  MovieTime,
  MovieDate,
} from "../../../components/Link/Link";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 1,
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
            height: 600,
          }}
        >
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

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

export default function ShowTimes() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [showTime, setShowTime] = useState([]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleShowTimes = (cinemaId) => {
    const found = cinemaSys.find((value) => value.maHeThongRap === cinemaId);
    setShowTime(found.cumRapChieu);
  };
  const { movieId } = useParams();
  const { data = {}, isLoading } = useQuery({
    queryKey: ["movieShowtimes", movieId],
    queryFn: () => getCinemaShowTimes(movieId),
    enabled: !!movieId,
  });

  const cinemaSys = data?.heThongRapChieu || [];

  useEffect(() => {
    if (cinemaSys.length > 0) {
      setShowTime(cinemaSys[0].cumRapChieu);
    }
  }, [cinemaSys]);

  return (
    <CssBaseline>
      <Container id="ThongTinLichChieu">
        <Box
          sx={{
            backgroundColor: "ButtonShadow",
            border: 1,
            borderColor: "divider",
            height: 600,
            margin: "50px 0px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={1} sm={2} md={1} lg={1}>
              <Box sx={{ height: "100%" }}>
                <Tabs
                  TabIndicatorProps={{
                    style: { background: theme.palette.primary.main },
                  }}
                  onChange={handleChange}
                  orientation="vertical"
                  value={value}
                  sx={{
                    borderRight: 1,
                    borderColor: "divider",
                    height: "100%",
                    width: 100,
                  }}
                >
                  {cinemaSys.map((cinema) => {
                    return (
                      <CustomTab
                        onClick={() => handleShowTimes(cinema.maHeThongRap)}
                        key={cinema.maHeThongRap}
                        icon={
                          <Avatar
                            src={cinema.logo}
                            alt={cinema.tenHeThongRap}
                          />
                        }
                      />
                    );
                  })}
                </Tabs>
              </Box>
            </Grid>
            <Grid item xs={11} sm={10} md={11} lg={11}>
              <TabPanel value={value} index={value}>
                {showTime.map((cinema) => {
                  return (
                    <div style={{ padding: "0px 15px" }} key={cinema.maCumRap}>
                      <h3 style={{ fontWeight: 600 }}>{cinema.tenCumRap}</h3>
                      <div>
                        {cinema.lichChieuPhim.map((info) => {
                          const date = dayjs(info.ngayChieuGioChieu).format(
                            "YYYY-MM-DD"
                          );
                          const time = dayjs(info.ngayChieuGioChieu).format(
                            "HH:mm"
                          );
                          return (
                            <CustomLink
                              onClick={() =>
                                navigate(`/tickets/${info.maLichChieu}`)
                              }
                              key={info.maLichChieu}
                            >
                              <MovieDateDiv>
                                <MovieDate>{date}</MovieDate>
                                <Typography>~</Typography>
                                <MovieTime>{time}</MovieTime>
                              </MovieDateDiv>
                            </CustomLink>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </TabPanel>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </CssBaseline>
  );
}
