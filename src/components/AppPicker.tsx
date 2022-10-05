import { View, Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';

const AppPicker = () => {
  const navigation = useNavigation();
  const tailwind = useTailwind();
  return (
    <View style={tailwind('flex-row items-center')}>
      <Text style={tailwind('text-base text-white')}>Category</Text>
      <Pressable onPress={() => navigation.navigate('Modal')}>
        <MaterialIcons name="expand-more" size={28} color="white" />
      </Pressable>
    </View>
  );
};

export default AppPicker;
