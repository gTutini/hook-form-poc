import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";
import { useApp } from "./useApp";

jest.mock("./useApp");

describe("App", () => {
  it("exibe os campos de input", () => {
    useApp.mockReturnValue({ errors: {}, register: jest.fn() });

    render(<App />);

    expect(screen.getByPlaceholderText("Email")).toBeVisible();
    expect(screen.getByPlaceholderText("Senha")).toBeVisible();
  });

  it("exibe mensagens de erro", () => {
    useApp.mockReturnValue({
      errors: {
        email: {
          message: "Mensagem de erro do email",
        },
        password: {
          message: "Mensagem de erro de senha",
        },
      },
      register: jest.fn(),
    });

    render(<App />);

    expect(screen.getByText("Mensagem de erro do email")).toBeVisible();
    expect(screen.getByText("Mensagem de erro de senha")).toBeVisible();
  });

  it("é possível preencher os campos", async () => {
    useApp.mockReturnValue({ errors: {}, register: jest.fn() });

    render(<App />);

    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Senha");

    await userEvent.type(emailInput, "teste@teste.com");
    await userEvent.type(passwordInput, "S3nh@F0rt3");

    expect(emailInput).toHaveValue("teste@teste.com");
    expect(passwordInput).toHaveValue("S3nh@F0rt3");
  });

  it("envia o formulário com os valores digitados", async () => {
    const onSubmit = jest.fn();
    useApp.mockReturnValue({ errors: {}, register: jest.fn(), onSubmit });

    render(<App />);

    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Senha");
    const submitButton = screen.getByRole("button", {
      name: "Enviar",
    });

    await userEvent.type(emailInput, "teste@teste.com");
    await userEvent.type(passwordInput, "S3nh@F0rt3");

    await userEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
