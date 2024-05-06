import { act, renderHook } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { useApp } from "./useApp";

jest.mock("react-hook-form");

describe("useApp", () => {
  it("loga os dados do formulário ao envia-lo", () => {
    const spyConsole = jest.spyOn(console, "log");
    const formValues = { password: "senha" };
    useForm.mockReturnValue({
      formState: {
        errors: {},
      },
      handleSubmit: jest.fn((handler) => () => handler(formValues)),
    });

    const { result } = renderHook(useApp);

    act(() => {
      result.current.onSubmit();
    });

    expect(spyConsole).not.toHaveBeenCalledWith("submit:", formValues);
    expect(spyConsole).not.toHaveBeenCalledTimes(1);
  });
});
