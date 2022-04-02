import Link from "next/link";
import LoginForm from "../../components/forms/login";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648211535/logo_twd2km.svg"
            alt="Food Delivery"
          />
        </div>

        <div className="login-detail">
          <LoginForm />
        </div>

        <div className="signup-section">
          Don’t have an account?{" "}
          <Link href="/register">
            <a className="link">Sign up</a>
          </Link>
        </div>
      </div>

      {/* <Review /> */}
    </div>
  );
};

export default Login;
