import { AuthenticationComponent } from "./authentication.styles.jsx";
import SignUpForm from "../../sing-up-form/sign-up-form";
import SignInForm from "../../sing-in-form/sign-in-form";

const Authentication = () => {
  return (
    <AuthenticationComponent className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </AuthenticationComponent>
  );
};

export default Authentication;
