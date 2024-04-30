import PropTypes from "prop-types";

function Input({ register, name, ...props }) {
  return <input {...props} {...register(name)} />;
}

Input.propTypes = {
  register: PropTypes.func,
  name: PropTypes.string,
};

export { Input };
