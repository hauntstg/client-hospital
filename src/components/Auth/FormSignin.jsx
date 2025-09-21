import { NavLink, Form, Link, useSubmit } from "react-router-dom";
import classes from "./FormSignin.module.css";
export default function FormSignin({ error }) {
  const submit = useSubmit();
  function handleSubmit(e) {
    e.preventDefault();
    submit(e.currentTarget, { method: "post" });
  }
  return (
    <div className={classes.login + " col-12"}>
      <div className={classes.form}>
        <Form method="post">
          <div className={classes.title}>Đăng nhập</div>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Đăng nhập</button>
          {error && (
            <ul className={classes.error}>
              {Object.values(error).map((err, index) => (
                <li key={index + err}>{err}</li>
              ))}
            </ul>
          )}
          <p>
            Tạo tài khoản?<Link to="/dang-ky"> Đăng ký</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
