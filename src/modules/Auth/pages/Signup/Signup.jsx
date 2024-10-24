import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import {
  Box,
  TextField,
  Container,
  Button,
  Alert,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { GiCancel } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import theme from "../../../../theme";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import { userSignUp } from "../../../../apis/userAPI";

const signupSchema = object({
  taiKhoan: string().required("Tài khoản không được để trống."),
  matKhau: string()
    .required("Mật khẩu không được để trống.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      "Ít nhất 6 ký tự, 1 in hoa, 1 thường, 1 số."
    ),
  email: string()
    .required("Email không được để trống.")
    .email("Email không hợp lệ."),
  soDt: string().required("Số ĐT không được để trống."),
  hoTen: string().required("Họ tên không được để trống."),
});

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
      maNhom: "GP09",
      maLoaiNguoiDung: "KhachHang",
    },
    resolver: yupResolver(signupSchema),
    mode: "onTouched",
  });

  const {
    mutate: handleSignUp,
    isLoading,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: (payload) => userSignUp(payload),
    onSuccess: () => {
      navigate("/sign-in");
    },
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (values) => {
    handleSignUp(values);
    console.log(values);
  };

  return (
    <BackgroundImage>
      <Box
        sx={{
          backgroundColor: "white",
          maxWidth: "max-content",
          position: "relative",
          borderRadius: 3,
          p: 5,
          margin: "auto",
          width: "530px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <FaCircleUser
            style={{ fontSize: 50, color: theme.palette.primary.main }}
          />
          <h4 style={{ marginTop: "10px" }}>Đăng Ký</h4>
        </div>
        <Box
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            "& .MuiTextField-root": {
              width: "100%",
              m: 1,
            },
          }}
          autoComplete="off"
          component="form"
        >
          <TextField
            color="info"
            label="Tài Khoản"
            variant="outlined"
            error={!!errors.taiKhoan}
            helperText={errors.taiKhoan?.message}
            {...register("taiKhoan")}
          />
          <TextField
            color="info"
            label="Mật Khẩu"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            error={!!errors.matKhau}
            helperText={errors.matKhau?.message}
            {...register("matKhau")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            color="info"
            label="Email"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email")}
          />
          <TextField
            color="info"
            label="Số Đt"
            variant="outlined"
            error={!!errors.soDt}
            helperText={errors.soDt?.message}
            {...register("soDt")}
          />
          <TextField
            color="info"
            label="Họ Tên"
            variant="outlined"
            error={!!errors.hoTen}
            helperText={errors.hoTen?.message}
            {...register("hoTen")}
          />
          {error && (
            <Alert sx={{ width: "100%" }} variant="outlined" severity="error">
              {error}
            </Alert>
          )}
          {isSuccess && (
            <Alert sx={{ width: "100%" }} variant="outlined" severity="success">
              Đăng ký thành công !
            </Alert>
          )}
          <Button
            disabled={isLoading}
            sx={{ width: "150px", p: 1, margin: "20px 0px", color: "white" }}
            type="submit"
            variant="contained"
          >
            Đăng Ký
          </Button>
          <Link to={"/sign-in"}>Đã có tài khoản? Đăng nhập tại đây.</Link>
        </Box>
        <div
          onClick={() => navigate("/")}
          style={{
            color: "grey",
            position: "absolute",
            top: -5,
            right: 10,
            fontSize: "40px",
            cursor: "pointer",
          }}
        >
          <GiCancel />
        </div>
      </Box>
    </BackgroundImage>
  );
}
