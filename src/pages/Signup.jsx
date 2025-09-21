import FormSignup from "../components/Auth/FormSignup";
import { redirect, useActionData } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSignup } from "../services/auth";

export default function Signup() {
  const data = useActionData();
  const [error, setError] = useState();

  useEffect(() => {
    if (data) {
      setError(data);
    }
  }, [data]);
  return <FormSignup error={error} />;
}

export async function action({ request }) {
  const data = await request.formData();

  const payload = {
    fullname: data.get("fullname"),
    email: data.get("email"),
    password: data.get("password"),
    phone: data.get("phone"),
  };

  const { fullname, email, password, phone } = payload;
  const errors = {};
  // console.log(fullname, email, password, phone);

  // validate form input
  if (fullname.trim() === "") {
    errors.fullname = "Vui lòng nhập tên đầy đủ!";
  }

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

  if (phone.trim() === "") {
    errors.phone = "Vui lòng nhập số điện thoại!";
  } else if (phone.trim().length !== 10) {
    errors.phone = "Số điện thoại không hợp lệ!";
  }
  console.log(errors);
  if (Object.keys(errors).length) {
    return errors;
  }

  const res = await fetchSignup(payload);
  console.log(res);
  if (res.status === 409) {
    errors.email = res.error;
    return errors;
  }
  return redirect("/dang-nhap");
}
