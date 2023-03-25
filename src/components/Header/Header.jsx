import React, { useState } from "react";
import * as H from "./header.styled.js";
import { FaBars } from "react-icons/fa";
import Sidebar from "../sideBar/sidebar";
import Input from "../Input/searchInput";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);
  return (
    <>
      <H.Head>
        <H.Container>
          <FaBars onClick={showSiderbar} />
          {sidebar && <Sidebar active={setSidebar} />}
        </H.Container>
      </H.Head>
      <H.Inputimg>
        <img src={logo} alt="logo-fpr"></img>
        <Input />
      </H.Inputimg>
    </>
  );
};

export default Header;
