import { useSelector } from "react-redux";

const WithGaurd = (Component) => {
  const Wrapper = () => {
    const { isLoggedIn } = useSelector((state) => state.auth);
    return isLoggedIn ? <Component /> : "Please Login or Register first.";
  };
  return Wrapper;
};

export default WithGaurd;
