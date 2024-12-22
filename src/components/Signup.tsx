import { useRef } from "react";
import { AuthPage } from "../ui/AuthPage";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/signup`, {
      username,
      password,
    });
    alert("You have successfully signed up");
    navigate("/signin");
  }
  return (
    <AuthPage
      type="Signup"
      inputs={[
        {
          inputName: "Username",
          placeHolder: "Username",
          reference: usernameRef,
        },
        {
          inputName: "Password",
          placeHolder: "Password",
          reference: passwordRef,
        },
      ]}
      onSubmit={signup}
    />
  );
}
