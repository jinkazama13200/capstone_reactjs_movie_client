import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FaUserLock } from "react-icons/fa";
import theme from "../../../../theme";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import {
  Box,
  TextField,
  Container,
  Button,
  Alert,
  Stack,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { GiCancel } from "react-icons/gi";
import { userSignIn } from "../../../../apis/userAPI";
import { useUserContext } from "../../../../contexts/UserContext/UserContext";

const signInSchema = object({
  taiKhoan: string().required("Tài khoản không được để trống."),
  matKhau: string()
    .required("Mật khẩu không được để trống.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      "Ít nhất 6 ký tự, 1 in hoa, 1 thường, 1 số."
    ),
});

export default function Signin() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { currentUser, handleSignin: onSigninSuccess } = useUserContext();

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    resolver: yupResolver(signInSchema),
    mode: "onTouched",
  });

  const {
    mutate: handleSignIn,
    isLoading,
    error,
  } = useMutation({
    mutationFn: (payload) => userSignIn(payload),
    onSuccess: (data) => {
      onSigninSuccess(data);
    },
  });

  const onSubmit = (values) => {
    handleSignIn(values);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (currentUser) {
    const abcxyz = searchParams.get("purchase");
    return <Navigate to={abcxyz || "/"} replace />;
  }

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
        }}
      >
        <div style={{ textAlign: "center" }}>
          <FaUserLock
            style={{ fontSize: 50, color: theme.palette.primary.main }}
          />
          <h4 style={{ marginTop: "10px" }}>Đăng Nhập</h4>
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
          {error && (
            <Stack>
              <Alert variant="outlined" severity="error">
                {error}
              </Alert>
            </Stack>
          )}
          <Button
            disabled={isLoading}
            sx={{ width: "150px", p: 1, margin: "20px 0px", color: "white" }}
            type="submit"
            variant="contained"
          >
            Đăng Nhập
          </Button>
          <Link to={"/sign-up"}>Chưa có tài khoản? Đăng ký tại đây.</Link>
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
