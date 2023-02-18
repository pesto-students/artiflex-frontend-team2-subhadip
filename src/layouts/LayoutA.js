import { Outlet } from "react-router-dom";

export default function LayoutA() {
  return (
    <div>
      <Outlet />
      <nav>navigations...</nav>
    </div>
  );
}
