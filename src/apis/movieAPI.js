import fetcher from "./fetcher";

export async function getMovies() {
  try {
    const res = await fetcher.get("/api/QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: "GP09",
      },
    });
    return res.data;
  } catch (error) {
    throw error.data;
  }
}

export async function getMovieDetails(movieId) {
  try {
    const res = await fetcher.get("/api/QuanLyPhim/LayThongTinPhim", {
      params: {
        MaPhim: movieId,
      },
    });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}
