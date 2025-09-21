import { Form, useSubmit } from "react-router-dom";
import "./FormBooking.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";

export default function FormBooking({ error }) {
  const initial = {
    fullName: "",
    email: "",
    dob: null,
    phone: "",
    gender: "",
    address: "",
    department: "",
    appointmentDate: null,
    session: "",
    notes: "",
  };
  const [form, setForm] = useState(initial);
  const submit = useSubmit();

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "dob" || name === "appointmentDate") return;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // const form = e.currentTarget;
    submit(e.currentTarget, { method: "post" });
  }

  useEffect(() => {
    console.log(form.appointmentDate);
  }, [form]);

  return (
    <div className="item-booking">
      <div className="item-booking-title">
        <div className="item-booking-title-left">
          <h3>ĐĂNG KÝ KHÁM</h3>
          <p>
            Vui lòng điền thông tin vào form bên dưới để đăng ký khám bệnh theo
            yêu cầu
          </p>
        </div>
        <div className="item-booking-title-right">
          <div className="custom-btn-close">X</div>
        </div>
      </div>
      <Form method="post" className="main-form row" onSubmit={handleSubmit}>
        <div className="col-6">
          <input
            type="text"
            name="fullName"
            placeholder="Họ và tên"
            value={form.fullName}
            onChange={handleChange}
          />
          {error ? (
            <p className="error-form">{error.fullName}</p>
          ) : (
            <p className="error-form"></p>
          )}
        </div>
        <div className="col-6">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {error ? (
            <p className="error-form">{error.email}</p>
          ) : (
            <p className="error-form"></p>
          )}
        </div>
        <div className="col-6">
          <DatePicker
            selected={form.dob}
            onChange={(date) => setForm((f) => ({ ...f, dob: date }))}
            placeholderText="Ngày sinh"
            dateFormat="dd/MM/yyyy"
            className="form-control"
            name="dob"
          />
          {error ? (
            <p className="error-form">{error.dob}</p>
          ) : (
            <p className="error-form"></p>
          )}
        </div>
        <div className="col-6">
          <input
            type="number"
            name="phone"
            placeholder="Số điện thoại"
            value={form.phone}
            onChange={handleChange}
          />
          {error ? (
            <p className="error-form">{error.phone}</p>
          ) : (
            <p className="error-form"></p>
          )}
        </div>
        <div className="col-12">
          <select
            name="gender"
            className="select-sex"
            value={form.gender}
            onChange={handleChange}
          >
            <option value="">Giới tính</option>
            <option value="Nữ">Nữ</option>
            <option value="Nam">Nam</option>
          </select>
          <p className="error-form"></p>
        </div>
        <div className="col-12">
          <input
            type="text"
            name="address"
            placeholder="Địa chỉ"
            value={form.address}
            onChange={handleChange}
          />
          {error ? (
            <p className="error-form">{error.address}</p>
          ) : (
            <p className="error-form"></p>
          )}
        </div>
        <div className="col-12">
          <select
            name="department"
            className="select-ck"
            value={form.department}
            onChange={handleChange}
          >
            <option value="999">Chuyên khoa</option>
            <option value="1">Xét nghiệm</option>
            <option value="2">Nhi khoa</option>
            <option value="3">Sản phụ khoa</option>
            <option value="4">Cơ - xương - khớp</option>
            <option value="5">Khoa ngoại</option>
            <option value="6">Tai Mũi Họng</option>
            <option value="7">Tim Mạch</option>
            <option value="8">Tiêu Hóa Gan Mật</option>
            <option value="9">Nội Tổng Quát</option>
            <option value="10">Mắt</option>
            <option value="11">Răng - Hàm - Mặt</option>
            <option value="12">Cơ Xương Khớp</option>
            <option value="13">Nội Thần Kinh</option>
            <option value="14">Tâm Thể</option>
            <option value="15">Nội Tiết</option>
            <option value="16">Dị Ứng Miễn Dịch</option>
            <option value="17">Hô Hấp</option>
            <option value="18">Tư Vấn Giấc Ngủ</option>
            <option value="19">Khám Sức Khỏe Tổng Quát</option>
            <option value="20">Khám Sức Khỏe Hậu Covid-19</option>
            <option value="21">Da Liễu</option>
          </select>
          <p className="error-form"></p>
        </div>
        <div className="col-6">
          <DatePicker
            selected={form.appointmentDate}
            onChange={(date) =>
              setForm((f) => ({ ...f, appointmentDate: date ?? null }))
            }
            onChangeRaw={(e) => {
              const value = e.target.value;
              const [day, month, year] = value.split("/");
              if (day && month && year) {
                const parsed = new Date(`${year}-${month}-${day}`);
                if (!isNaN(parsed)) {
                  setForm((f) => ({ ...f, appointmentDate: parsed }));
                }
              }
            }}
            placeholderText="Ngày khám"
            dateFormat="dd/MM/yyyy"
            className="form-control"
            name="appointmentDate"
          />
          {error ? (
            <p className="error-form">{error.appointmentDate}</p>
          ) : (
            <p className="error-form"></p>
          )}
        </div>
        <div className="col-6">
          <select
            name="session"
            className="select-session"
            value={form.session}
            onChange={handleChange}
          >
            <option value="">Buổi khám</option>
            <option value="Buổi sáng">Buổi sáng</option>
            <option value="Buổi chiều">Buổi chiều</option>
          </select>
          {error ? (
            <p className="error-form">{error.session}</p>
          ) : (
            <p className="error-form"></p>
          )}
        </div>
        <div className="col-12">
          <textarea
            name="notes"
            placeholder="Triệu chứng"
            value={form.notes}
            onChange={handleChange}
          />
          {error ? (
            <p className="error-form">{error.notes}</p>
          ) : (
            <p className="error-form"></p>
          )}
        </div>
        <div className="wrap-btn">
          <button className="btn-send-form">GỬI</button>
        </div>
      </Form>
    </div>
  );
}
