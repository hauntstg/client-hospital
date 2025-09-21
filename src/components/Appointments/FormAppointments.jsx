import { NavLink } from "react-router-dom";
import "./FormAppointments.css";
import FormBooking from "./FormBooking";

export default function FormAppointments({ error }) {
  return (
    <div className="row">
      <div className="main-wrap-top">
        <div className="main-redirect">
          <div className="col-10 mx-auto">
            <NavLink to="/">Trang chủ</NavLink> |{" "}
            <NavLink to="/dang-ky-kham">Đăng ký khám</NavLink>
          </div>
        </div>
        <div className="main-wrap-form col-10 mx-auto">
          <h2 className="title-dkk">ĐĂNG KÝ KHÁM</h2>
          <i className="mdi mdi-gamepad custom-icon-plus">
            <span></span>
            <span></span>
          </i>
          <div className="row form-dkk">
            <div className="col-4">
              <div className="item-bg">
                <div className="item-content">
                  <strong>Lưu ý:</strong> <hr />
                  <p>
                    Lịch hẹn có hiệu lực sau khi có xác nhận chính thức từ Phòng
                    khám Bệnh viện Đại học Y Dược 1
                  </p>
                  <p>
                    Quý khánh hàng vui lòng cung cấp thông tin chính xác để được
                    phục vụ tốt nhất. Trong trường hợp cung cấp sai thông tin
                    email &amp; điện thoại, việc xác nhận cuộc hẹn sẽ không hiệu
                    lực.
                  </p>
                  <p>
                    Quý khách sử dụng dịch vụ đặt hẹn trực tuyến, xin vui lòng
                    đặt trước ít nhất là 24 giờ trước khi đến khám.
                  </p>
                  <p>
                    Trong trường hợp khẩn cấp hoặc nghi ngờ có các triệu chứng
                    nguy hiểm, quý khách vui lòng ĐẾN TRỰC TIẾP Phòng khám hoặc
                    các trung tâm y tế gần nhất để kịp thời xử lý.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="item-form container">
                <FormBooking error={error} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
