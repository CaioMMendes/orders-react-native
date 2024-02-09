import { Image, Text, View } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";
import LinkButton from "@/components/link-button";
import { useState } from "react";
import { useCartStore } from "@/stores/cart-store";

const ProductPage = () => {
  const { id } = useLocalSearchParams();
  const [product] = PRODUCTS.filter((item) => item.id === id);
  const [quantity, setQuantity] = useState(1);
  const cartStore = useCartStore();
  const navigation = useNavigation();

  const handleIncrementQuantity = () => {
    if (quantity > 50) return;
    setQuantity((quantity) => quantity + 1);
  };
  const handleDecrementQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity((quantity) => quantity - 1);
  };

  const handleAddProductToCart = () => {
    cartStore.add(product, quantity);
    navigation.goBack();
  };

  return (
    <View className="flex-1">
      <Image
        source={product.cover}
        className="w-full h-52"
        resizeMode="cover"
      />

      <View className="p-5 mt-8 flex-1">
        <Text className="text-lime-400 text-2xl font-heading">
          {formatCurrency(product.price)}
        </Text>

        <Text className="text-slate-400 font-body text-base leading-6 mb-6">
          {product.description}
        </Text>

        {product.ingredients.map((ingredient) => (
          <Text
            key={ingredient}
            className="text-slate-400 font-body text-base leading-6"
          >
            {"\u2022"} {ingredient}
          </Text>
        ))}
      </View>

      <View className="p-5 flex-row gap-5 justify-between items-center">
        <Text className="text-slate-400 items-center justify-start text-lg ">
          Quantidade:
        </Text>
        <Button className="px-4" onPress={handleDecrementQuantity}>
          <Button.Icon>
            <Feather name="minus" size={20} />
          </Button.Icon>
        </Button>
        <Text className="text-lg  font-medium text-slate-50 flex-1 items-center flex-row text-center justify-center">
          {quantity}
        </Text>
        <Button className="px-4" onPress={handleIncrementQuantity}>
          <Button.Icon>
            <Feather name="plus" size={20} />
          </Button.Icon>
        </Button>
      </View>

      <View className="p-5 pb-8 gap-5">
        <Button onPress={handleAddProductToCart}>
          <Button.Icon>
            <Feather name="plus-circle" size={20} />
          </Button.Icon>
          <Button.Text>Adicionar ao pedido</Button.Text>
        </Button>

        <LinkButton title="Voltar ao cardápio" href="/" />
      </View>
    </View>
  );
};

export default ProductPage;
