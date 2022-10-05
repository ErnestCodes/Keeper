import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AppPicker from '../components/AppPicker';

const CreateScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="h-full bg-[#2A2ABB]">
      <View className="flex-row items-center justify-between px-3">
        <EvilIcons name="close" size={28} color="white" onPress={() => navigation.goBack()} />
        {/* selector */}
        <AppPicker />
        <Pressable className="pt-12 items-center bg-blue-200 px-5 py-1 rounded-full  font-semibold">
          <Text className="text-sm bg-[#2A2ABB]">Add</Text>
        </Pressable>
      </View>

      {/* Notes Section */}
      <View className="bg-slate-100 p-20 items-center mt-14 rounded-tl-20 rounded-tr-20">
        <TextInput
          style={{ fontSize: 24, fontWeight: '500' }}
          placeholder="Title"
          multiline={true}
          numberOfLines={3}
          placeholderTextColor="#B2BEB5"
        />
      </View>
      <View className="h-full">
        <ScrollView className="bg-slate-100">
          <TextInput
            multiline={true}
            numberOfLines={10}
            placeholder="Start typing..."
            placeholderTextColor="#B2BEB5"
            style={{ height: '100%', textAlignVertical: 'top', padding: 20 }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CreateScreen;
