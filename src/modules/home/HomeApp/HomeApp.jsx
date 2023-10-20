import React from "react";
import { Grid, Container, Button, Typography } from "@mui/material";
import phone from "../../../media/phoneCase.png";
import phoneBanner from "../../../media/banner-slider-5.8a084f78.jpg";

export default function HomeApp() {
  return (
    <div
      style={{
        backgroundImage: `url(https://tcdtist-tix-clone.vercel.app/static/media/backapp.b46ef3a1.jpg)`,
      }}
    >
      <Container id="UngDung">
        <Grid sx={{ alignItems: "center", p: 4 }} container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography
              sx={{
                color: "white",
                fontSize: "xx-large",
                fontWeight: 600,
              }}
            >
              Ứng dụng tiện lợi dành cho
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "xx-large",
                fontWeight: 600,
              }}
            >
              người yêu điện ảnh
            </Typography>
            <Typography
              sx={{
                color: "white",
                margin: "30px 0px",
                wordBreak: "break-word",
              }}
            >
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </Typography>
            <Button
              sx={{ color: "white", p: 2, fontWeight: 600 }}
              href="https://www.bhdstar.vn/"
              variant="contained"
              target="_blank"
            >
              APP MIỄN PHÍ - TẢI VỀ NGAY !!
            </Button>
          </Grid>
          <Grid
            sx={{ textAlign: "center", maxWidth: "100%", position: "relative" }}
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <img
              style={{
                maxWidth: "100%",
                display: "block",
                padding: "0px 30%",
              }}
              src={phone}
              alt="phone"
            />
            <div style={{ position: "absolute", top: 0, borderRadius: "50px" }}>
              <img
                style={{
                  maxWidth: "100%",
                  display: "block",
                  padding: "3.3% 32% 0 32%",
                  borderRadius: "140px",
                }}
                src={phoneBanner}
                alt="banner"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
