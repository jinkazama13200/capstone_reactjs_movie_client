import fetcher from "./fetcher";

export async function getTicketsById(ticketId) {
  try {
    const res = await fetcher.get("/api/QuanLyDatVe/LayDanhSachPhongVe", {
      params: {
        MaLichChieu: ticketId,
      },
    });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function purchaseTicket(payload) {
  try {
    const res = await fetcher.post("/api/QuanLyDatVe/DatVe", payload);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}
