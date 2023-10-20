import React from "react";
import { styled } from "@mui/system";

const Button = styled("button")`
  height: 40px;
  border: none;
  width: 40px;
  border-radius: 5px;
`;

export default function TicketNote() {
  return (
    <div
      style={{
        display: "flex",
        gap: 30,
        marginTop: 20,
      }}
    >
      <div
        className="vip"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Button sx={{ backgroundColor: "orange" }} disabled={true}></Button>
        <span style={{ display: "block" }}>Vip</span>
      </div>
      <div
        className="standard"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button sx={{ backgroundColor: "lightgrey" }} disabled={true}></Button>
        <span style={{ display: "block" }}>Thường</span>
      </div>
      <div
        className="booked"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button sx={{ backgroundColor: "red", color: "black" }} disabled={true}>
          X
        </Button>
        <span style={{ display: "block" }}>Đã Đặt</span>
      </div>
      <div
        className="choosing"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          sx={{ backgroundColor: "green", color: "black" }}
          disabled={true}
        ></Button>
        <span style={{ display: "block" }}>Đang Chọn</span>
      </div>
    </div>
  );
}
