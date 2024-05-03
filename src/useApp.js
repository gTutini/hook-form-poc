import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "./schema";

function useApp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(schema),
  });

  console.log(watch(["email", "password"]));

  const onSubmit = handleSubmit((values) => {
    console.log("submit:", values);
  });

  return { register, onSubmit, errors };
}

export { useApp };
