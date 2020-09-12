import React, { useState } from "react";
import { Input } from "../../component/UIKit";
import { login } from "../../redux/auth/action";
import { useDispatch } from "react-redux";


function Login() {

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();


  console.log(userName, "userName");
  console.log(password, "password");

  const submit = (e) => {
    e.preventDefault();
    dispatch(login({ userName, password }))
  }
  return <form onSubmit={submit}>
    <Input label="UserName" onChange={setUserName} />
    <Input label="Password" type="password" onChange={setPassword} />
    <button>Submit</button>
  </form>
}

export default Login;