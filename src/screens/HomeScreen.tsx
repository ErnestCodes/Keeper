import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Platform,
} from 'react-native';
import { MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../colors';
import { notes } from '../dummy';
import Notes from '../components/Notes';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: '#191970' }}>
        <View
          style={{
            alignItems: 'flex-end',
            padding: 16,
          }}>
          <AntDesign name="user" size={30} style={{ color: colors.white }} />
        </View>

        {/* Name Area */}
        <View style={{ padding: 16 }}>
          <Text style={{ color: colors.white, fontSize: 30 }}>{'Hello,\nNnaemeka'}</Text>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 6,
              flexDirection: 'row',
              // justifyContent: "space-between",
              backgroundColor: '#2A2ABB',
              borderRadius: 20,
              marginVertical: 20,
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons name="magnify" size={30} style={{ color: colors.white }} />
            <Pressable
              style={{ marginHorizontal: 5 }}
              onPress={() => navigation.navigate('Search')}>
              <Text style={{ color: colors.background, fontSize: 14 }}>Search...</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Notes Area */}
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          backgroundColor: colors.background,
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <Text style={{ fontSize: 24 }}>Notes</Text>
        <TouchableOpacity style={styles.add} onPress={() => navigation.navigate('Create')}>
          <Ionicons
            name="ios-add"
            size={34}
            style={{
              color: '#fff',
              alignSelf: 'center',
              marginHorizontal: 4,
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ height: '80%' }}>
        <ScrollView
          style={{
            backgroundColor: colors.background,
            flex: 1,
          }}>
          {notes.map((note, index) => (
            <Notes
              key={index}
              noteTitle={note.noteTitle}
              icon={note.icon}
              timeStamp={note.timeStamp}
              theme={note.theme}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 16 : 0,
    backgroundColor: '#191970',
  },
  add: {
    backgroundColor: '#2A2ABB',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginHorizontal: 15,
    marginVertical: 12,
  },
});
