import { Title } from "../atoms/Title";
import { InputField } from "../molecules/InputField";

export const FormLogin = () => {
  return (
    <div>
      <Title text="Iniciar sesión" level="h1" />
      <div>
        <InputField
          labelText="Correo electrónico"
          type="email"
          placeholder="Ingresa tu correo electrónico"
        />
      </div>
    </div>
  );
};
