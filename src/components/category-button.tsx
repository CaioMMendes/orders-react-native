import clsx from "clsx";
import { Pressable, PressableProps, Text, View } from "react-native";

type CategoryButtonTypes = PressableProps & {
  title: string;
  isSelected?: boolean;
};

const CategoryButton = ({
  title,
  isSelected,
  ...rest
}: CategoryButtonTypes) => {
  return (
    <Pressable
      className={clsx(
        "bg-slate-800 px-4 rounded-md justify-center h-10 ",
        isSelected && "ring-2 ring-lime-300"
      )}
      {...rest}
    >
      <Text className="text-slate-100 font-subtitle text-sm">{title}</Text>
    </Pressable>
  );
};

export default CategoryButton;
