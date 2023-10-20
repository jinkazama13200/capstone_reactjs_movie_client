import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import theme from "../../../theme";
import SeatItem from "./SeatItem/SeatItem";

export default function TicketChosing({
  ticketRoom,
  onSelectedSeat,
  selectedSeat,
}) {
  const handleSelectedSeat = (seat) => {
    onSelectedSeat(seat);
  };
  const seatList = ticketRoom?.danhSachGhe || [];
  const movieDetails = ticketRoom?.thongTinPhim || [];
  const { ngayChieu, gioChieu, tenRap } = movieDetails;

  return (
    <Box sx={{ textAlign: "center", border: 1, borderColor: "divider", p: 2 }}>
      <Grid container>
        <Grid item xs={12}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>
              {ngayChieu} - {gioChieu}
            </span>
            <span>{tenRap}</span>
          </div>
        </Grid>
        <Grid sx={{ paddingBottom: 2 }} item xs={12}>
          <h4>Màn Hình</h4>
        </Grid>
        <Grid container spacing={1}>
          {seatList.map((item) => {
            const isSelected = selectedSeat.find(
              (value) => value.maGhe === item.maGhe
            );
            return (
              <SeatItem
                isSelected={!!isSelected}
                selectedSeat={selectedSeat}
                onSelectedSeat={handleSelectedSeat}
                key={item.maGhe}
                item={item}
              />
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}
