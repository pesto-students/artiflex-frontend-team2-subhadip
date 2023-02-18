import { Outlet } from "react-router-dom";

export default function LayoutB() {
  return (
    <div>
      <nav>navigations...</nav>
      <Outlet />
    </div>
  );
}
