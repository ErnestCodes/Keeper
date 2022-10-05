import { StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { catItems } from '../catItems';
import CategoryPicker from '../components/CategoryPicker';

const ModalScreen = () => {
  const tailwind = useTailwind();
  return (
    <View className="pt-10 h-full items-center justify-center">
      <FlatList
        data={catItems}
        numColumns={3}
        keyExtractor={(item) => item.uid as any}
        renderItem={({ item }) => (
          <CategoryPicker label={item.label} icon={item.icon} color={item.color} />
        )}
      />
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({});
