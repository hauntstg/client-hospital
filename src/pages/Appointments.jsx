import { useEffect, useState, useRef } from "react";
import { redirect, useActionData, useNavigate } from "react-router-dom";
import FormAppointments from "../components/Appointments/FormAppointments";
import { fetchAppointment } from "../services/appointment";
import classes from "./Appointments.module.css";

export default function Appointments() {
  const data = useActionData();
  const [error, setError] = useState();
  const confirmBoxRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.message) {
      confirmBoxRef.current.showModal();
    } else {
      setError(data);
    }
  }, [data]);

  return (
    <div>
      <dialog className={classes.confirmBoxWrap} ref={confirmBoxRef}>
        <div className={classes.confirmBox}>
          <p className={classes.message}>Đăng ký khám thành công!</p>
          <div className={classes.confirmButton}>
            <button
              className={classes.closeButton}
              onClick={() => {
                confirmBoxRef.current.close();
                navigate("/");
              }}
            >
              Đóng
            </button>
          </div>
        </div>
      </dialog>
      <FormAppointments error={error} />;
    </div>
  );
}

export async function action({ request }) {
  const data = await request.formData();

  const payload = {
    fullName: data.get("fullName"),
    email: data.get("email"),
    dob: data.get("dob"),
    phone: data.get("phone"),
    gender: data.get("gender"),
    address: data.get("address"),
    department: data.get("department"),
    appointmentDate: data.get("appointmentDate"),
    session: data.get("session"),
    notes: data.get("notes"),
  };

  const {
    fullName,
    email,
    dob,
    phone,
    gender,
    address,
    department,
    appointmentDate,
    session,
    notes,
  } = payload;

  console.log("apppointmentDate: " + appointmentDate);

  const errors = {};

  // validate form input
  if (fullName.trim() === "") {
    errors.fullName = "Vui lòng nhập họ và tên!";
  }

  if (email.trim() === "") {
    errors.email = "Vui lòng nhập email!";
  } else if (email.includes("@") === false) {
    errors.email = "Email không chính xác, vui lòng nhập lại!";
  }

  if (phone.trim() === "") {
    errors.phone = "Vui lòng nhập số điện thoại!";
  }

  if (appointmentDate.trim() === "") {
    errors.appointmentDate =
      "Vui lòng nhập ngày khám và đúng định dạng ngày/tháng/năm!";
  }

  if (session.trim() === "") {
    errors.session = "Vui lòng nhập buổi khám!";
  }

  if (notes.trim() === "") {
    errors.notes = "Vui lòng nhập triệu chứng!";
  }

  // console.log(errors);
  if (Object.keys(errors).length) {
    return errors;
  }

  const res = await fetchAppointment(payload);

  if (!res.ok) {
    return new Response(
      JSON.stringify({ message: res.error || "Tạo lịch hẹn thất bại!" }),
      { status: res.status || 500 }
    );
  }

  return { message: "Đăng nhập thành công!" };
}
