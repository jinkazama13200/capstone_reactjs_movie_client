import fetcher from "./fetcher";

export async function userSignIn(payload) {
  try {
    const res = await fetcher.post("/api/QuanLyNguoiDung/DangNhap", payload);
    return res.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}

export async function userSignUp(payload) {
  try {
    const res = await fetcher.post("/api/QuanLyNguoiDung/DangKy", payload);
    return res.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}
