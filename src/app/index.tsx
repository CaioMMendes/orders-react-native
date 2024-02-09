import CategoryButton from "@/components/category-button";
import Header from "@/components/header";
import { CATEGORIES } from "@/utils/data/products";
import { useState } from "react";
import { View, Text, FlatList } from "react-native";

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
    </View>
  );
}
