import { useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/store/AuthContext.jsx";
// import { useDispatch } from "react-redux";
// import { logout } from "../store/auth";
import "./MainNavigation.css";

export default function MainNavigation() {
  const { isLogged, user } = useContext(AuthContext);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleLogout() {
    // dispatch(logout());
    // navigate("/login");
  }

  return (
    <div className="main-navigation container-fluid">
      <div className="main-navigation-bottom">
        <div className="header-wrap-left col-4">
          <img src="/images/logo-new.png" alt="logo" />
        </div>
        <div className="header-wrap-right col-8">
          <div className="header-wrap-top">
            <div className="search-wrap">
              <input type="text" name="search" placeholder="Tìm kiếm" />
              <button className="button-search">
                <span className="custom-magnify"></span>
              </button>
            </div>
            <div className="button-wrap">
              <div className="btn btn-dangkykham">
                <a href="/dang-ky-kham" className="">
                  <em className="custom-note"></em>
                  <span>ĐĂNG KÝ KHÁM</span>
                </a>
              </div>
              <div className="btn btn-tongdai">
                <a href="#" className="">
                  <span>TỔNG ĐÀI TƯ VẤN: 1900 6923</span>
                </a>
              </div>
            </div>
          </div>
          <div className="header-wrap-bottom">
            <div className="header-wrap-navbar rounded-top">
              <ul>
                <li className="drop-down">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    end
                  >
                    <span>GIỚI THIỆU</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </NavLink>
                </li>
                <li className="drop-down">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    end
                  >
                    <span>DỊCH VỤ</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </NavLink>
                </li>
                <li className="drop-down">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    end
                  >
                    <span>CHUYÊN KHOA</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </NavLink>
                </li>
                <li className="drop-down">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    end
                  >
                    <span>ĐỘI NGŨ BÁC SĨ</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </NavLink>
                </li>
                <li className="drop-down">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    end
                  >
                    <span>TIN TỨC</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </NavLink>
                </li>
                <li className="drop-down">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    end
                  >
                    <span>HƯỚNG DẪN KHÁCH HÀNG</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </NavLink>
                </li>
                <li className="drop-down">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    end
                  >
                    <span>LIÊN HỆ</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
