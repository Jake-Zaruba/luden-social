import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftMenu from "./components/leftMenu/LeftMenu";
import RightMenu from "./components/rightMenu/RightMenu";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftMenu />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>

        <RightMenu />
      </div>
    </>
  );
};

export default Layout;
