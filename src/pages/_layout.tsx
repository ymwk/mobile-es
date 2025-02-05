import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Suspense fallback={"loading..."}>
      <Outlet />
    </Suspense>
  );
};

export default Layout;