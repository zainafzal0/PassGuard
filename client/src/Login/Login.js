import React, { useState } from "react";
import "../Register/Register.css";
import logo from "../Assets/logo1.png";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../Actions/Actions";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const loginUser = () => {
    Axios.post("http://localhost:3001/users/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLogin(response.data.message);
      } else {
        dispatch(
          signIn(
            response.data.result[0].id,
            response.data.result[0].person_name,
            true
          )
        );
        history.push("/dashboard/home");
      }
    });
  };

  return (
    <div className="Register">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <img id="registerLogo" src={logo} alt="" />
          <form>
            {login !== "" && <h6>{login}</h6>}
            <input
              type="text"
              id="login"
              class="fadeIn first"
              name="login"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="password"
              id="login-password"
              class="fadeIn third"
              name="login"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              onClick={loginUser}
              type="button"
              class="fadeIn fourth"
              value="Log In"
            />
          </form>
          <div id="formFooter">
            <a class="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
