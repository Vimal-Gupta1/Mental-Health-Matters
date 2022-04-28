import React from "react";
// import "./Home.css";
const logo = require("./Images/background-home.png");

class Home extends React.Component {
  render() {
    return (
      <>
        <img src={logo} height={700} width={1352} alt="body" />
      </>
    );
  }
}
export default Home;
