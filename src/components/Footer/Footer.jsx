import React from "react";
import { Container, Grid, Avatar, Box } from "@mui/material";
import theme from "../../theme";
import { styled } from "@mui/system";
import { FaApple, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import ZionLogo from "../../media/zion.jpg";
import VerifiedLogo from "../../media/daThongBao-logo.cb85045e.png";

export default function Footer() {
  const partners = [
    {
      id: 1,
      logo: "https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    },
    {
      id: 2,
      logo: "https://movienew.cybersoft.edu.vn/hinhanh/cgv.png",
    },
    {
      id: 3,
      logo: "https://movienew.cybersoft.edu.vn/hinhanh/cinestar.png",
    },
    {
      id: 4,
      logo: "https://movienew.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
    },
    {
      id: 5,
      logo: "https://movienew.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
    },
    {
      id: 6,
      logo: "https://movienew.cybersoft.edu.vn/hinhanh/megags.png",
    },
    {
      id: 7,
      logo: "data:image/jpeg;base64,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",
    },
    {
      id: 8,
      logo: "http://ddcinema.vn/Content/Img/logo.png",
    },
    {
      id: 9,
      logo: "https://roonghome.files.wordpress.com/2020/06/touch-cinema-logo.png",
    },
    {
      id: 10,
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Cinemax_LA.png",
    },
    {
      id: 11,
      logo: "https://logowik.com/content/uploads/images/hbo.jpg",
    },
    {
      id: 12,
      logo: "https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png",
    },
    {
      id: 13,
      logo: "https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Zalo-App-Rec.png",
    },
    {
      id: 14,
      logo: "https://dongphucvina.vn/wp-content/uploads/2022/09/y-nghia-logo-tiki-file-vector-400x400.png",
    },
    {
      id: 15,
      logo: "https://inhoangha.com/ckfinder/userfiles/images/logo-acb.png",
    },
    {
      id: 16,
      logo: "https://inkythuatso.com/uploads/thumbnails/800/2021/09/logo-sacombank-inkythuatso-fn-10-16-42-08.jpg",
    },
  ];

  const SubTitle = styled("p")`
    color: white;
    font-weight: 600;
    font-size: 15px;
  `;
  const Item = styled("span")`
    display: block;
    font-size: 13px;
    color: grey;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      color: lightgrey;
    }
  `;
  const Icon = styled("div")`
    color: grey;
    font-size: 30px;
  `;
  const StyledSpan = styled("span")`
    color: white;
    font-size: 13px;
    display: block;
  `;

  return (
    <div style={{ backgroundColor: theme.customColor.black }}>
      <Container>
        <Box sx={{ padding: "20px 0px" }}>
          <Grid container>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <SubTitle>United Cinema</SubTitle>
              <div style={{ display: "flex", gap: "30px" }}>
                <div>
                  <Item>FAQ</Item>
                  <Item>Brand Guidelines</Item>
                </div>
                <div>
                  <Item>Thỏa thuận sử dụng</Item>
                  <Item>Chính sách bảo mật</Item>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} md={5} lg={4}>
              <SubTitle>Đối tác</SubTitle>
              <Grid container spacing={1}>
                {partners.map((item) => {
                  return (
                    <Grid key={item.id} item xs={3}>
                      <a target="_blank" href="https://www.bhdstar.vn/">
                        <Avatar
                          sx={{ width: "30px", height: "30px" }}
                          src={item.logo}
                        />
                      </a>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={4}>
              <Grid container>
                <Grid item xs={6}>
                  <SubTitle>Moblie App</SubTitle>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon>
                      <FaApple />
                    </Icon>
                    <Icon>
                      <BsAndroid2 />
                    </Icon>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <SubTitle>Social</SubTitle>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon>
                      <FaFacebook />
                    </Icon>
                    <Icon>
                      <FaInstagramSquare />
                    </Icon>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <hr
            style={{
              backgroundColor: "#e0e0e0",
              height: "3px",
            }}
          />
          <Grid container>
            <Grid item xs={12} sm={3} md={3}>
              <img src={ZionLogo} alt="zion" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <SubTitle>UNITED - SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</SubTitle>
              <StyledSpan style={{ display: "block" }}>
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </StyledSpan>
              <StyledSpan style={{ display: "block" }}>
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
              </StyledSpan>
              <StyledSpan style={{ display: "block" }}>
                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
                hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
              </StyledSpan>
              <StyledSpan style={{ display: "block" }}>
                Số Điện Thoại (Hotline): 1900 545 436
              </StyledSpan>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <img width={100} src={VerifiedLogo} alt="verified" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
