import Link from "next/link";
import LoginForm from "../../components/forms/login";
import Review from "../../components/Review/review";
import styles from "../../styles/login.module.scss";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <div className={styles.logo}>
          <img
            src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648211535/logo_twd2km.svg"
            alt="Food Delivery"
          />
        </div>

        <div className={styles.loginDetail}>
          <LoginForm />
        </div>

        <div className={styles.signupSection}>
          Don’t have an account?{" "}
          <Link href="/register">
            <a className={styles.link}>Sign up</a>
          </Link>
        </div>
      </div>

      <Review />
    </div>
  );
};

export default Login;
