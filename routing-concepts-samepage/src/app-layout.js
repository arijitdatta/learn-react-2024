import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"about"}>About Me</Link>
            </li>
            <li>
              <Link to={"art"}>My Paintings</Link>
            </li>
          </ul>
        </nav>
      </div>
      <br />
      <Outlet />
    </>
  );
};
export default AppLayout;
