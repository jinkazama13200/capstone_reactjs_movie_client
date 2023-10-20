import React, { useState } from "react";
import TicketChosing from "./TicketChosing/TicketChosing";
import TicketForm from "./TicketForm/TicketForm";
import TicketNote from "./TicketNote/TicketNote";
import { Grid, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTicketsById } from "../../apis/ticketAPI";
import TicketLoadingPage from "../../components/TicketLoadingPage/TicketLoadingPage";

export default function Tickets() {
  const { ticketId } = useParams();
  const { data: ticketRoom = {}, isLoading } = useQuery({
    queryKey: ["ticketRoom", ticketId],
    queryFn: () => getTicketsById(ticketId),
    enabled: !!ticketId,
  });
  const [selectedSeat, setSelectedSeat] = useState([]);
  const handleSelectedSeat = (seat) => {
    setSelectedSeat(seat);
  };

  if (isLoading) {
    return <TicketLoadingPage />;
  }
  return (
    <Container>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={7}>
          <TicketChosing
            selectedSeat={selectedSeat}
            onSelectedSeat={handleSelectedSeat}
            ticketRoom={ticketRoom}
          />
        </Grid>
        <Grid item xs={5}>
          <TicketForm
            setSelectedSeat={setSelectedSeat}
            selectedSeatArr={selectedSeat}
            ticketRoom={ticketRoom}
          />
          <TicketNote />
        </Grid>
      </Grid>
    </Container>
  );
}
