import { Component, useEffect } from "react";
import { Spin } from "antd";
import { useHistory, Link } from "react-router-dom";

export function Loading() {
  // const history = useHistory();
  // useEffect(() => {
  //   setTimeout(() => {
  //     history.push("/login");
  //   }, 5000);
  // }, [history]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="logo">
        <img
          style={{ minWidth: "200px", minHeight: "100px" }}
          src="/content/logo.svg"
        ></img>
      </div>
      <div>проверка подключения к аккаунту</div>
      <Spin></Spin>
      <Link to="/login">login</Link>
    </div>
  );
}
