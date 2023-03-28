import Directory from "../../directory/directory.component";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <Fragment>
      <Directory />
      <Outlet />
    </Fragment>
  );
}

export default Home;
