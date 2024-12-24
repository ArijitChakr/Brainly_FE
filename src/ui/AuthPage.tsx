import { Button } from "./button";
import { Input } from "./Input";

interface AuthType {
  type: "Signup" | "Signin";
  inputs: {
    inputName: string;
    placeHolder: string;
    reference: React.Ref<HTMLInputElement>;
  }[];
  onSubmit: () => void;
  loading?: boolean;
}

export function AuthPage({ type, inputs, onSubmit, loading }: AuthType) {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-auth-bg">
      <div className="border border-white shadow-xl p-8 bg-white rounded-lg">
        <h1 className="text-center text-2xl font-bold mb-2">{type}</h1>
        {inputs.map(({ inputName, placeHolder, reference }, index) => (
          <div key={index}>
            <h4 className="text-lg font-bold">{inputName}</h4>
            <Input
              size="default"
              type="text"
              reference={reference}
              placeHolder={placeHolder}
            />
          </div>
        ))}
        <div className="w-full flex justify-center my-2">
          <Button
            type="primary"
            text={type === "Signup" ? "Signup" : "Login"}
            size="full"
            onClick={onSubmit}
          />
        </div>
        {loading && <p className="text-center">Loading...</p>}
      </div>
    </div>
  );
}
