import React, { useState } from "react";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  Container,
  Paper,
  Stack,
  InputLabel,
  useMediaQuery,
} from "@mui/material";
import { StyledButton } from "../../../components/Button/Button";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../../apis/movieAPI";
import { getCinemaShowTimes } from "../../../apis/cinemaAPI";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export default function MovieSelectSys() {
  const navigate = useNavigate();
  const [movieSelected, setMovieSelected] = useState("");
  const [theaterSelected, setTheaterSelected] = useState([]);
  const [showTimeSelected, setShowTimeSelected] = useState("");

  const isMobileScreen = useMediaQuery("(max-width:425px)");

  const { data: movies = [] } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  const { data: theaters = [] } = useQuery({
    queryKey: ["theaters", movieSelected],
    queryFn: () => getCinemaShowTimes(movieSelected),
    enabled: !!movieSelected,
  });

  const cinemaSys = theaters?.heThongRapChieu || [];
  const dateTimeSys = theaterSelected?.lichChieuPhim || [];

  const renderMovieSelector = (array) => {
    return array.map((item) => {
      return (
        <MenuItem value={item.maPhim} key={item.maPhim}>
          {item.tenPhim}
        </MenuItem>
      );
    });
  };

  const renderTheaterSelector = (array) => {
    return array.map((item) => {
      return item.cumRapChieu.map((theater) => {
        return (
          <MenuItem key={theater.maCumRap} value={theater}>
            {theater.tenCumRap}
          </MenuItem>
        );
      });
    });
  };

  const renderDateTimeSelector = (array) => {
    return array.map((item) => {
      const renderDate = dayjs(item.ngayChieuGioChieu).format(
        "DD/MM/YYYY hh:mm"
      );
      return (
        <MenuItem key={item.maLichChieu} value={item.maLichChieu}>
          {renderDate}
        </MenuItem>
      );
    });
  };

  return (
    <Container>
      <Box elevation={3} component={Paper} sx={{ flexGrow: 1, p: 3, mt: 2 }}>
        <Box maxWidth="fix-content" component="form" autoComplete="off">
          <Stack
            spacing={3}
            flexDirection={isMobileScreen ? "column" : "row"}
            useFlexGap={true}
          >
            {/* Movie Picking */}
            <FormControl fullWidth>
              <InputLabel>Chọn Phim</InputLabel>
              <Select
                value={movieSelected}
                onChange={(e) => {
                  setMovieSelected(e.target.value);
                  setTheaterSelected("");
                  setShowTimeSelected("");
                }}
                label="Chọn Phim"
              >
                {renderMovieSelector(movies)}
              </Select>
            </FormControl>
            {/* Theater Location Picking */}
            <FormControl fullWidth>
              <InputLabel>Chọn Rạp</InputLabel>
              <Select
                value={theaterSelected}
                onChange={(e) => {
                  setTheaterSelected(e.target.value);
                  setShowTimeSelected("");
                }}
                label="Chọn Rạp"
              >
                {cinemaSys.length == 0 ? (
                  <MenuItem disabled value="">
                    Vui Lòng Chọn Phim
                  </MenuItem>
                ) : (
                  renderTheaterSelector(cinemaSys)
                )}
              </Select>
            </FormControl>
            {/* Date & Time Picking */}
            <FormControl fullWidth>
              <InputLabel>Chọn Ngày Chiếu</InputLabel>
              <Select
                value={showTimeSelected}
                label="Chọn Ngày Chiếu"
                onChange={(e) => setShowTimeSelected(e.target.value)}
              >
                {dateTimeSys.length == 0 ? (
                  <MenuItem disabled value="">
                    Vui lòng chọn phim và rạp
                  </MenuItem>
                ) : (
                  renderDateTimeSelector(dateTimeSys)
                )}
              </Select>
            </FormControl>
            <StyledButton
              onClick={() => navigate(`/tickets/${showTimeSelected}`)}
              disabled={showTimeSelected == 0}
              variant="contained"
              fullWidth
            >
              MUA VÉ
            </StyledButton>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
