import "./Footer.css";

export default function Footer() {
  return (
    <div className="custom-footer">
      <div className="footer-left">
        <div className="footer-left-img">
          <img alt="" src="./images/icon/ico-mail.png" />
        </div>
        <div className="footer-left-message">
          <p className="footer-left-message">ĐĂNG KÝ NHẬN BẢN TIN</p>
          <p className="footer-left-message">
            Để lại địa chỉ email để nhận thông tin y khoa và chương trình ưu
            đãi.
          </p>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-right-input">
          <input type="text" placeholder="Địa chỉ email" />
        </div>
        <div className="footer-right-btn">
          <div>Đăng ký</div>
        </div>
      </div>
    </div>
  );
}
