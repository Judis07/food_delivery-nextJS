import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { message } from "antd";
import { useRouter } from "next/router";
import { API_URL2 } from "../../config/utils";
import Input from "../Inputs/inputs";
import Checkbox from "../Checkbox/checkbox";

import styles from "../../styles/login.module.scss";

const LoginForm = () => {
  const router = useRouter();

  const [showPass, setShowPass] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getValueFn = (name, value) => {
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const changeShowPassFn = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const res = await axios.get(`${API_URL2}/users`, {
        params: {
          email,
          password,
        },
      });

      const { user } = res.data;

      localStorage.setItem("user", JSON.stringify(user));
      setLoading(false);

      router.push("/");
      message.success("Logged in successfully :)");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error);
      } else {
        console.log(err);
      }
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <p>Sign in with your data that you entered during your registration.</p>

      <Input
        type="email"
        label="email"
        placeholder="name@example.com"
        getValue={getValueFn}
        isRequired={true}
      />

      <Input
        type={showPass ? "text" : "password"}
        label="password"
        placeholder="min. 8 characters"
        icon="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648279422/password-eye_r62wun.svg"
        getValue={getValueFn}
        changeShowPass={changeShowPassFn}
        showPass={showPass}
        isRequired={true}
      />

      <Checkbox label="Keep me logged in" />

      {!loading && error && <p className={styles.errMsg}>{error}</p>}

      <div className={styles.loginBtn}>
        {loading ? (
          <button>Loading...</button>
        ) : (
          <button type="submit">Login</button>
        )}
      </div>

      <div className={styles.forgotPass}>
        <Link href="/forgot-password">
          <a className={styles.link}>Forgot password</a>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
