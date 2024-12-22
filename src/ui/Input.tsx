import { Ref } from "react";

const inputType = {
  default: "rounded-md text-xl my-2 px-4 py-2 border",
  small: "rounded-md text-md my-2 px-2 py-2 border",
};

export function Input({
  type,
  reference,
  placeHolder,
  value,
  size,
}: {
  type: string;
  reference?: Ref<HTMLInputElement>;
  placeHolder?: string;
  value?: string;
  size: "default" | "small";
}) {
  return (
    <input
      className={`${inputType[size]}`}
      type={type}
      ref={reference}
      placeholder={placeHolder}
      value={value && value}
    />
  );
}
