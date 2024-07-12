import React from "react";
let PreLoader = (props) => {
    return <div>
    <img
    src="./images/loading.svg"
    alt="loader"
    style={{
      display: "flex",
      alignItems: "center",
      height: "100vh",
      margin:"auto",
      width: "150px"
    }}
  />
  </div>
};

export default PreLoader;