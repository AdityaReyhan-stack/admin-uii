import React from "react";

function Input(props) {
  const {
    id,
    backgroundColor = "",
    border = "border-gray-03",
    ...rest
  } = props;

  return (
    <input
      id={id}
      className={`py-3 pl-4 rounded-md w-full border text-gray-01 ${border} ${backgroundColor} focus:outline-none`}
      {...rest}
    />
  );
}

export default Input;
