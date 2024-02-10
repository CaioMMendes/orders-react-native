import { TextInput, TextInputProps } from "react-native";
import { slate } from "tailwindcss/colors";

const Input = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput
      multiline
      textAlignVertical="top"
      placeholderTextColor={slate[400]}
      className="h-32 bg-slate-800 rounded-md px-4 py-3 font-body text-slate-100"
      {...rest}
    />
  );
};

export default Input;
