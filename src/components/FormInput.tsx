import { type ChangeEvent } from "react";

type FormInputProps = {
  name: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputName: string;
  value: string;
};

function FormInput({
  name,
  label,
  onChange,
  inputName,
  value,
}: FormInputProps) {
  return (
    <div className="flex flex-col mt-2">
      <label htmlFor={inputName} className="text-white">
        {label}
      </label>
      <input
        type="text"
        id={inputName}
        onChange={onChange}
        name={name}
        className="p-2 rounded-md outline-none focus:ring-4 focus:ring-slate-600 bg-slate-300"
        value={value}
      />
    </div>
  );
}

export default FormInput;
