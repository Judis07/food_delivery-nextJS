import Link from "next/link";
import RegisterForm from "../../components/forms/register";
import CustomImage from "../../components/CustomImage/customImage";
import Review from "../../components/Review/review";
import styles from "../../styles/login.module.scss";

const Register = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <div className={styles.logo}>
          <CustomImage
            src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648211535/logo_twd2km.svg"
            alt="Food Delivery"
          />
        </div>

        <div className={styles.loginDetail}>
          <RegisterForm />
        </div>

        <div className={styles.signupSection}>
          Already have an account?{" "}
          <Link href="/login">
            <a className={styles.link}>Login</a>
          </Link>
        </div>
      </div>

      <Review />
    </div>
  );
};

export default Register;
