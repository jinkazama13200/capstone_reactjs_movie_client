import React, { useState } from "react";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";

export default function SeatItem({
  item,
  onSelectedSeat,
  selectedSeat,
  isSelected,
}) {
  const { daDat, loaiGhe, maGhe, tenGhe } = item;
  //   const [isSelected, setIsSelected] = useState(false);
  const handleSelected = () => {
    const selected = !isSelected;
    if (selected) {
      const newSelectedSeat = { ...item };
      onSelectedSeat([...selectedSeat, newSelectedSeat]);
    } else {
      const newSelectedSeat = selectedSeat.filter(
        (value) => value.maGhe !== maGhe
      );
      onSelectedSeat(newSelectedSeat);
    }
  };
  const BookedSeatItem = styled("button")`
    border: none;
    height: 40px;
    width: 40px;
    border-radius: 5px;
    background-color: red;
    color: black;
  `;
  const TicketSelectedButton = styled("button")`
    height: 40px;
    border: none;
    width: 40px;
    border-radius: 5px;
    background-color: ${() => {
      if (isSelected) {
        return `green !important`;
      } else if (loaiGhe === "Vip") {
        return "orange";
      } else {
        return "lightgrey";
      }
    }};
    transition: 0.3s all;
    &:hover {
      background-color: grey;
    }
  `;
  return (
    <Grid item xs={1} key={maGhe} sx={{ height: "auto", minWidth: "max-content" }}>
      {daDat ? (
        <BookedSeatItem disabled={daDat}>X</BookedSeatItem>
      ) : (
        <TicketSelectedButton onClick={() => handleSelected()}>
          {tenGhe}
        </TicketSelectedButton>
      )}
    </Grid>
  );
}
