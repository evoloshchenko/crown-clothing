import "./authentication.styles.scss";
import SignUpForm from "../../sing-up-form/sign-up-form";
import SignInForm from "../../sing-in-form/sign-in-form";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
