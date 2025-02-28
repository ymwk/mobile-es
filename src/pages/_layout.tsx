import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Suspense fallback={'loading...'}>
      <Outlet />
      {/* <Link
        to="/list"
        style={{
          position: 'fixed',
          top: 10,
          left: 10,
          fontSize: 14,
          color: 'blue',
        }}
      >
        페이지 리스트 보기
      </Link> */}
    </Suspense>
  );
};

export default Layout;