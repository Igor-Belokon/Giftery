import { Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postCards } from "../store/action/index";

function Login({ postCards }) {
  const [userCode, userChange] = useState("");
  const [apiID, apiIDChange] = useState("");
  const [key, keyChange] = useState("");

  console.log(userCode);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>Giftery Marcket</div>
      <div className="Logo"></div>
      <div>Установка соеденения</div>
      <input
        type="userCode"
        name="userCode"
        placeholder="Введите код клиента"
        value={userCode}
        onChange={(event) => userChange(event.target.value)}
      ></input>
      <input
        type="apiID"
        name="apiID"
        placeholder="введите API ID"
        value={apiID}
        onChange={(event) => apiIDChange(event.target.value)}
      ></input>
      <input
        type="key"
        name="key"
        placeholder="введите секретный ключ"
        value={key}
        onChange={(event) => keyChange(event.target.value)}
      ></input>

      <Button
        onClick={() => postCards({ userCode, apiID, key })}
        type="primary"
        size={"size"}
      >
        <Link to="/store">Подтвердить</Link>
      </Button>
    </div>
  );
}
export default connect(null, { postCards })(Login);
