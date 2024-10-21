import fetcher from "./fetcher";

export async function getCinemaSystem() {
  try {
    const res = await fetcher.get("/api/QuanLyRap/LayThongTinHeThongRap");
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getTheaterById(cinemaId) {
  try {
    const res = await fetcher.get(
      "/api/QuanLyRap/LayThongTinLichChieuHeThongRap",
      {
        params: {
          maHeThongRap: cinemaId,
          MaNhom: "GP09",
        },
      }
    );
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getCinemaShowTimes(movieId) {
  try {
    const res = await fetcher.get("/api/QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        MaPhim: movieId,
      },
    });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}
