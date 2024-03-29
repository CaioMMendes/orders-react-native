import { formatCurrency } from "@/utils/functions/format-currency";
import { forwardRef } from "react";
import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type ProductDataProps = {
  title: string;
  description: string;
  thumbnail: ImageProps;
  quantity?: number;
  price: number;
};

type ProductItemProps = TouchableOpacityProps & {
  data: ProductDataProps;
};

const ProductItem = forwardRef<TouchableOpacity, ProductItemProps>(
  ({ data, ...rest }, ref) => {
    return (
      <TouchableOpacity
        className="w-full flex-row items-center pb-4"
        {...rest}
        ref={ref}
      >
        <Image source={data.thumbnail} className="w-20 h-20 rounded-md" />
        <View className="flex-1 ml-3 ">
          <View className="flex-row gap-2 flex-1 items-center">
            <Text className="text-slate-50 font-subtitle text-base flex-1">
              {data.title}
            </Text>
            <Text className="font-subtitle text-base text-lime-400">
              {formatCurrency(data.price)}
            </Text>
            {data.quantity && (
              <Text className="text-slate-400 text-sm font-subtitle">
                x {data.quantity}
              </Text>
            )}
          </View>

          <Text className="text-slate-300 text-xs leading-5 mt-0.5 ">
            {data.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);

export default ProductItem;
