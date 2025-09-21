import { useEffect, useContext } from "react";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import Footer from "../components/Footer/Footer";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { fetchSignout } from "../services/auth.jsx";
import { AuthContext } from "../components/store/AuthContext.jsx";
import "./Layout.css";

export default function LayoutPage() {
  const dataAuth = useLoaderData();
  const navigate = useNavigate();
  const { isLogged, user, signOut } = useContext(AuthContext);

  // useEffect(() => {
  //   if (!dataAuth) {
  //     navigate("/login");
  //   }
  // }, [dataAuth]);

  async function signoutHandle() {
    const res = await fetchSignout();
    console.log(res);
    if (res.ok) {
      signOut();
    }
  }
  return (
    <div className="container-fluid vh-100">
      {/* {isLogged ? (
        <div className="islogged">
          <span className="islogged-email">{user?.email}</span>{" "}
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <button className="btn-logout1">Thoát</button>
        </div>
      ) : (
        <div className="islogged"></div>
      )} */}
      <header className="header">
        {isLogged ? (
          <div className="islogged">
            <span className="islogged-email">{user?.email}</span>{" "}
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <button className="btn-logout" onClick={signoutHandle}>
              Thoát
            </button>
          </div>
        ) : (
          <div className="islogged"></div>
        )}
        <MainNavigation />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
