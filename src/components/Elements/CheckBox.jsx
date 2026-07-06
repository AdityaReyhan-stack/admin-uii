import React from "react";

function CheckBox(props) {
  const { id, name, label } = props;

  return (
    <div className="mb-3">
      <input
        type="checkbox"
        id={id}
        name={name}
        className="text-sm accent-primary"
      />

      <label htmlFor={id} className="text-sm text-gray-01 ml-6">
        {label}
      </label>
    </div>
  );
}

export default CheckBox;
