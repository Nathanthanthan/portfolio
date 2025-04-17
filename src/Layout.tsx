import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="main">
      <Outlet />
    </div>
  );
}
