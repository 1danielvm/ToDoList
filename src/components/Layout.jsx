import React from "react";
import Header from "./Header";

function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      <div className="Layout">{props.children}</div>
    </React.Fragment>
  );
}

export default Layout;
