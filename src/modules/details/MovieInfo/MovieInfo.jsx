import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../../../apis/movieAPI";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import theme from "../../../theme";
import ModalVideo from "react-modal-video";
import { StyledButton } from "../../../components/Button/Button";
import "react-modal-video/scss/modal-video.scss";
import { CssBaseline, Container, Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import LoadingPage from "../../../components/LoadingPage/LoadingPage";

const MoviePoster = styled("img")({
  height: 500,
  opacity: 0,
});
const MovieTitle = styled("h3")({
  color: "white",
  fontWeight: 600,
});
const MovieDescription = styled("p")({
  color: "lightgray",
});
const StyledLi = styled("li")({
  listStyle: "none",
  color: "white",
  paddingLeft: 150,
  paddingBottom: 20,
  position: "relative",
});

export default function MovieInfo() {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState("");

  const { data = {}, isLoading } = useQuery({
    queryKey: ["movieInfo", movieId],
    queryFn: () => getMovieDetails(movieId),
  });

  const handleScrollToShowTime = () => {
    const ShowTime = document.getElementById("ThongTinLichChieu");
    ShowTime.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const { hinhAnh, tenPhim, moTa, ngayKhoiChieu, danhGia, trailer } = data;
  const date = dayjs(ngayKhoiChieu).format("DD-MM-YYYY");

  useEffect(() => {
    if (trailer) {
      let trailerString = trailer;
      trailerString = trailerString.replace(
        "https://www.youtube.com/watch?v=",
        ""
      );
      trailerString = trailerString.replace("https://youtu.be/", "");
      setUrl(trailerString);
    }
  }, [trailer]);

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <CssBaseline>
      <Container>
        <Box>
          <MovieTitle sx={{ padding: "50px 0px 20px 0px" }}>
            <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
              Trang Chủ
            </span>{" "}
            | {tenPhim}
          </MovieTitle>
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${hinhAnh})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: 350,
              }}
              className="poster"
            >
              <MoviePoster src={hinhAnh} alt={tenPhim} />
            </div>
            <div className="info">
              <MovieTitle>{tenPhim}</MovieTitle>
              <MovieDescription>{moTa}</MovieDescription>
              <Typography variant="ul">
                <StyledLi>
                  <Typography
                    sx={{ position: "absolute", top: 0, left: 0 }}
                    variant="span"
                  >
                    Ngày Khởi Chiếu
                  </Typography>
                  <Typography variant="span">{date}</Typography>
                </StyledLi>
                <StyledLi>
                  <Typography
                    sx={{ position: "absolute", top: 0, left: 0 }}
                    variant="span"
                  >
                    Đánh Giá
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: `${theme.palette.primary.main}`,
                    }}
                    variant="span"
                  >
                    {danhGia}
                  </Typography>
                </StyledLi>
              </Typography>
              <Stack direction="row" spacing={3}>
                <StyledButton
                  onClick={() => setIsOpen(true)}
                  variant="contained"
                >
                  Xem Trailer
                </StyledButton>
                <StyledButton
                  onClick={handleScrollToShowTime}
                  variant="contained"
                >
                  Mua Vé Ngay
                </StyledButton>
              </Stack>
            </div>
          </div>
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            videoId={url}
            youtube={{ mute: 0, autoplay: 1 }}
          />
        </Box>
      </Container>
    </CssBaseline>
  );
}
