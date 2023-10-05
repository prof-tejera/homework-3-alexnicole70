import Input from "components/Input/Input";
import "./LoginForm.css";
import Button from "components/Button/Button";
import CheckBox from "components/CheckBox/CheckBox";

const LoginForm = () => {
  return (
    <div>
      <p>Username:</p>
      <Input></Input>
      <p>Password:</p>
      <Input type="password"></Input>
      <div className="remember-me">
        <CheckBox></CheckBox>
        <p>Remember Me</p>
      </div>

      <Button text="Submit" active>
        {" "}
      </Button>
    </div>
  );
};

export default LoginForm;
