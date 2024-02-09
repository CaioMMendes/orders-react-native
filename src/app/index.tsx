import CategoryButton from "@/components/category-button";
import Header from "@/components/header";
import ProductItem from "@/components/product-item";
import { CATEGORIES, MENU } from "@/utils/data/products";
import { useState } from "react";
import { View, Text, FlatList, SectionList } from "react-native";

export default function Home() {
  const [categorySelected, setCategorySelected] = useState(CATEGORIES[0]);

  const handleCategorySelect = (category: string) => {
    setCategorySelected(category);
  };

  return (
    <View className="flex-1  pt-8">
      <Header title={"Faça seu pedido"} />
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
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />

      <SectionList
        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}
        //espaçamento que fica no final da pagina
        contentContainerStyle={{ paddingBottom: 100 }}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => <ProductItem data={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-xl text-slate-50 font-heading mt-8 mb-3">
            {title}
          </Text>
        )}
      />
    </View>
  );
}
