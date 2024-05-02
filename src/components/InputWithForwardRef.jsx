import { forwardRef } from "react";

const InputWithForwardRef = forwardRef(function Input(props, ref) {
  return <input {...props} ref={ref} />;
});

export { InputWithForwardRef };
