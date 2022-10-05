import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTailwind } from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';
import { picker } from './index';

const CategoryPicker = ({ label, icon, color }: picker) => {
  const tailwind = useTailwind();
  const navigation = useNavigation();
  return (
    <View style={tailwind('flex-col items-center justify-center px-5 py-5')}>
      <TouchableOpacity
        style={[styles.add, { backgroundColor: color }]}
        onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name={icon}
          size={40}
          style={{
            color: '#fff',
            alignSelf: 'center',
          }}
        />
      </TouchableOpacity>
      <Text style={tailwind('text-black text-base')}>{label}</Text>
    </View>
  );
};

export default CategoryPicker;

const styles = StyleSheet.create({
  add: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});
