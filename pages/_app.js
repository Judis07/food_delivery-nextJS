import "antd/dist/antd.css";
import { AuthContextProvider } from "../stores/authContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />;
    </AuthContextProvider>
  );
}

export default MyApp;
