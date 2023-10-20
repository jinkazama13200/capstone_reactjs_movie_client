import fetcher from "./fetcher";

export async function getMovieBanner() {
  try {
    const res = await fetcher.get("/api/QuanLyPhim/LayDanhSachBanner");
    return res.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

export async function getMovies() {
  try {
    const res = await fetcher.get("/api/QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: "GP09",
      },
    });
    return res.data.content;
  } catch (error) {
    throw error.data.content;
  }
}

export async function getMovieDetails(movieId) {
  try {
    const res = await fetcher.get("/api/QuanLyPhim/LayThongTinPhim", {
      params: {
        MaPhim: movieId,
      },
    });
    return res.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}
