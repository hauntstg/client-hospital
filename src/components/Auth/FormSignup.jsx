import { NavLink, Form, Link, useSubmit } from "react-router-dom";
import classes from "./FormSignup.module.css";
export default function FormSignup({ error }) {
  const submit = useSubmit();
  function handleSubmit(e) {
    e.preventDefault();
    submit(e.currentTarget, { method: "post" });
  }
  return (
    <div className={classes.register + " col-12"}>
      {/* <img src="/images/banner1.jpg" alt="register banner" />
      <img src="/images/banner1.jpg" alt="register banner" /> */}
      <div className={classes.form}>
        <Form method="post">
          <div className={classes.title}>Đăng ký</div>

          <input type="text" required placeholder="Họ và tên" name="fullname" />
          <input type="text" required placeholder="Email" name="email" />
          <input
            type="password"
            required
            placeholder="Mật khẩu"
            name="password"
          />
          <input
            type="text"
            required
            placeholder="Số điện thoại"
            name="phone"
          />
          <button>Đăng ký</button>
          {error && (
            <ul className={classes.error}>
              {Object.values(error).map((err, index) => (
                <li key={err + index}>{err}</li>
              ))}
            </ul>
          )}
          <p>
            Đăng nhập?<Link to="/dang-nhap"> Click</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
