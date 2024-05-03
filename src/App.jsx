import { Input, InputWithForwardRef } from "./components";

import { useApp } from "./useApp";

function App() {
  const { errors, onSubmit, register } = useApp();

  return (
    <main className="container">
      <form
        onSubmit={onSubmit}
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
            <InputWithForwardRef
              type="password"
              placeholder="Senha"
              autoComplete="password"
              aria-invalid={!!errors?.password}
              {...register("password")}
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
