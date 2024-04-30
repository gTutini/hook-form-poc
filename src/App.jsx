import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "./components";
import { schema } from "./schema";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(schema),
  });

  console.log(watch(["email", "password"]));

  const onSubmit = (values) => {
    console.log("submit:", values);
  };

  return (
    <main className="container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "576px",
          margin: "auto",
        }}
      >
        <fieldset>
          <label>
            Email
            <Input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              aria-invalid={!!errors?.email}
              register={register}
            />
            {errors?.email && <small>{errors.email.message}</small>}
          </label>

          <label>
            Senha
            <Input
              type="password"
              name="password"
              placeholder="Senha"
              autoComplete="password"
              aria-invalid={!!errors?.password}
              register={register}
            />
            {errors?.password && <small>{errors.password.message}</small>}
          </label>
        </fieldset>

        <input type="submit" value="Enviar" />
      </form>
    </main>
  );
}

export default App;
