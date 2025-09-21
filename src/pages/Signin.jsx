import { useState, useEffect, useContext } from "react";
import { useActionData, useNavigate } from "react-router-dom";
import { fetchSignin } from "../services/auth";
import api from "../services/api";
import FormSignin from "../components/Auth/FormSignin";
import { AuthContext } from "../components/store/AuthContext.jsx";

export default function Signin() {
  const data = useActionData();
  const [error, setError] = useState();
  const { setIsLogged, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (data) {
  //     setError(data);
  //   }
  // }, [data]);

  useEffect(() => {
    if (data?.message) {
      const fetchProfile = async () => {
        try {
          const { data } = await api.get("/admin/profile"); // withCredentials đã set ở instance
          setUser(data);
          setIsLogged(true);
        } catch (error) {
          console.error("Lỗi khi fetch profile:", error);
          setUser(null);
          setIsLogged(false);
        }
      };

      fetchProfile();
      navigate("/");
    } else {
      setError(data);
    }
  }, [data]);

  return <FormSignin error={error} />;
}

export async function action({ request }) {
  const data = await request.formData();

  const payload = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const { email, password } = payload;
  const errors = {};

  // validate form input
  if (email.trim() === "") {
    errors.email = "Vui lòng nhập email!";
  } else if (email.includes("@") === false) {
    errors.email = "Email không chính xác, vui lòng nhập lại!";
  }

  if (password.trim() === "") {
    errors.password = "Vui lòng nhập mật khẩu!";
  } else if (password.trim().length < 4) {
    errors.password = "Mật khẩu phải từ 4 ký tự trở lên!";
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  const res = await fetchSignin(payload);
  if (res?.status === 404 || res?.status === 401) {
    errors.email = res.error;
    return errors;
  }
  console.log(res);
  return { message: "Đăng nhập thành công!" };
}
