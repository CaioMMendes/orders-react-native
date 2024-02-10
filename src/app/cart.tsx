import { Button } from "@/components/button";
import Header from "@/components/header";
import Input from "@/components/input";
import LinkButton from "@/components/link-button";
import ProductItem from "@/components/product-item";
import { ProductCartProps, useCartStore } from "@/stores/cart-store";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Feather } from "@expo/vector-icons";
import { Alert, ScrollView, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CartPage = () => {
  const cartStore = useCartStore();

  const total = formatCurrency(
    cartStore.products.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0)
  );

  const handleRemoveProduct = (product: ProductCartProps) => {
    Alert.alert(
      "Remover",
      `Deseja remover 1x - ${product.title} do carrinho?`,
      [
        {
          text: "cancelar",
        },
        {
          text: "Remvover",
          onPress: () => cartStore.remove(product.id),
        },
      ]
    );
  };

  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />
      <KeyboardAwareScrollView>
        <ScrollView>
          <View className="flex-1 p-5">
            {cartStore.products.length > 0 ? (
              <View className="border-b border-slate-700">
                {cartStore.products.map((product) => {
                  return (
                    <ProductItem
                      key={product.id}
                      data={product}
                      onPress={() => handleRemoveProduct(product)}
                    />
                  );
                })}
              </View>
            ) : (
              <Text className="font-body text-slate-400 text-center my-8">
                Seu carrinho está vazio
              </Text>
            )}
            <View className="flex-row gap-2 items-center mt-5 mb-4">
              <Text className="text-slate-50 text-xl font-subtitle">
                Total:
              </Text>
              <Text className="text-lime-400 text-2xl font-heading">
                {total}
              </Text>
            </View>
            <Input placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento" />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
      <View className="p-5 gap-5">
        {cartStore.products.length > 0 && (
          <Button>
            <Button.Text>Enviar pedido</Button.Text>
            <Button.Icon>
              <Feather name="arrow-right-circle" size={20} />
            </Button.Icon>
          </Button>
        )}
        <LinkButton title="Voltar ao cardápio" href="/" />
      </View>
    </View>
  );
};

export default CartPage;
