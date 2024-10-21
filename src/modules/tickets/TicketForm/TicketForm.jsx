import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { StyledButton } from "../../../components/Button/Button";
import theme from "../../../theme";
import currencyFormat from "../../../CurrencyFormat";
import { useMutation } from "@tanstack/react-query";
import { purchaseTicket } from "../../../apis/ticketAPI";
import { useUserContext } from "../../../contexts/UserContext/UserContext";

export default function TicketForm({
  selectedSeatArr,
  ticketRoom,
  setSelectedSeat,
}) {
  const movieInfo = ticketRoom?.thongTinPhim || [];
  const { gioChieu, ngayChieu, tenCumRap, tenPhim, tenRap, maLichChieu } =
    movieInfo;
  const totalPrice = selectedSeatArr.reduce((result, value) => {
    return result + value.giaVe;
  }, 0);

  const { currentUser } = useUserContext();

  const { mutate: onSuccessPurchase } = useMutation({
    mutationFn: (payload) => purchaseTicket(payload),
    onSuccess: () => {
      window.location.reload();
    },
  });

  const handlePurchase = () => {
    if (selectedSeatArr.length === 0) {
      alert("Bạn chưa chọn ghế.");
      return;
    }
    const objAPI = {
      maLichChieu: maLichChieu,
      danhSachVe: selectedSeatArr,
      taiKhoanNguoiDung: currentUser?.taiKhoan,
    };
    alert("Mua vé thành công!");
    onSuccessPurchase(objAPI);
  };
  if (selectedSeatArr.length > 5) {
    alert("Bạn không thể chọn hơn 5 ghế,xin hãy chọn lại.");
    setSelectedSeat([]);
  }

  return (
    <Box sx={{ border: 1, borderColor: "divider", p: 2 }}>
      <div style={{ textAlign: "center" }}>
        <h4>{tenPhim}</h4>
      </div>
      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Ngày Chiếu, Giờ Chiếu:</span>
        <span>
          {ngayChieu} - {gioChieu}
        </span>
      </div>
      <hr />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Tên Rạp:</span>
        <span>{tenCumRap}</span>
      </div>
      <hr />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Rạp:</span>
        <span>{tenRap}</span>
      </div>
      <hr />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "200px",
          overflow: "hidden",
        }}
      >
        <div style={{ width: "140px" }}>
          <span style={{ display: "inline-block" }}>Số Ghế Chọn:</span>
        </div>
        <div style={{ width: "100%", textAlign: "right", flexWrap: "wrap" }}>
          {selectedSeatArr.map((item) => {
            return (
              <span style={{ display: "inline-block" }} key={item.maGhe}>
                Ghế{" "}
                <span
                  style={{ color: theme.palette.primary.main, fontWeight: 600 }}
                >
                  {item.tenGhe}
                </span>
                ,
              </span>
            );
          })}
        </div>
      </div>
      <hr />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Tổng Tiền:</span>
        <h5>{currencyFormat(totalPrice)}</h5>
      </div>
      <hr />
      <StyledButton
        onClick={handlePurchase}
        sx={{ width: "100%" }}
        variant="contained"
      >
        Đặt Vé
      </StyledButton>
    </Box>
  );
}
