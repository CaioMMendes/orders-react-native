import CategoryButton from "@/components/category-button";
import Header from "@/components/header";
import ProductItem from "@/components/product-item";
import { useCartStore } from "@/stores/cart-store";
import { CATEGORIES, MENU } from "@/utils/data/products";
import { Link } from "expo-router";
import { useRef, useState } from "react";
import { View, Text, FlatList, SectionList } from "react-native";

export default function Home() {
  const [categorySelected, setCategorySelected] = useState(CATEGORIES[0]);
  const sectionListRef = useRef<SectionList>(null);
  const cartStore = useCartStore();
  const cartQuantityItems = cartStore.products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const handleCategorySelect = (category: string) => {
    setCategorySelected(category);

    const sectionIndex = CATEGORIES.findIndex(
      (category) => category === categorySelected
    );

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      });
    }
  };

  return (
    <View className="flex-1  pt-8">
      <Header title={"Faça seu pedido"} cartItemsQuantity={cartQuantityItems} />
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={(item) => (
          <CategoryButton
            title={item.item}
            isSelected={item.item === categorySelected}
            onPress={() => handleCategorySelect(item.item)}
          />
        )}
        horizontal
        className="max-h-10 my-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />

      <SectionList
        className="flex-1 p-5"
        ref={sectionListRef}
        showsVerticalScrollIndicator={false}
        //espaçamento que fica no final da pagina
        contentContainerStyle={{ paddingBottom: 100 }}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <ProductItem data={item} />
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-xl text-slate-50 font-heading  mb-3">
            {title}
          </Text>
        )}
      />
    </View>
  );
}
