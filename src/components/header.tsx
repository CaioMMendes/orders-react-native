import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { white } from "tailwindcss/colors";

type HeaderType = {
  title: string;
  cartItemsQuantity?: number;
};

const Header = ({ title, cartItemsQuantity = 0 }: HeaderType) => {
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Image source={require("@/assets/logo.png")} className="h-6 w-32" />
        <Text className="text-slate-50 text-xl font-heading">{title}</Text>
      </View>

      {cartItemsQuantity > 0 && (
        <TouchableOpacity className="relative" activeOpacity={0.7}>
          <View className="bg-lime-300 w-5 h-5 rounded-full items-center justify-center z-10 -right-3.5 top-2 ">
            <Text className="text-slate-900 font-bold text-xs">
              {cartItemsQuantity}
            </Text>
          </View>
          <Feather name="shopping-bag" color={white} size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
