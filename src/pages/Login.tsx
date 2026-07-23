import { InputField } from "../components/molecules/InputField";

export const Login = () => {
  return (
    <div>
      <InputField labelText="Username" id="username" />
      <InputField labelText="Password" id="password" type="password" />
    </div>
  );
};
