import { useRef, useState } from "react";
import { AuthPage } from "../ui/AuthPage";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  async function signin() {
    setLoading(true);
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const jwt = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
      username,
      password,
    });
    localStorage.setItem("token", jwt.data.token);
    setLoading(false);
    navigate("/dashboard");
  }

  return (
    <AuthPage
      type="Signin"
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
      onSubmit={signin}
      loading={loading}
    />
  );
}
