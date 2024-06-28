import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <main className="mt-[90px]">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
