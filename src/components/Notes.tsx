import { View, Text } from 'react-native';
import React from 'react';
import { colors } from '../colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { notes } from './index';

const Notes = ({ noteTitle, icon, theme, timeStamp }: notes) => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        flexDirection: 'row',
        marginHorizontal: 16,
        marginVertical: 4,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialCommunityIcons name={icon} size={30} style={{ color: theme, marginRight: 5 }} />
        <View>
          <Text style={{ fontSize: 16 }}>{noteTitle}</Text>
          <Text style={{ color: colors.greyColor }}>{timeStamp}</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        {/* <MaterialCommunityIcons
          name="pencil"
          size={30}
          style={{ color: theme }}
        /> */}
        <MaterialCommunityIcons
          name="trash-can"
          size={30}
          style={{ color: theme, marginLeft: 5 }}
        />
      </View>
    </View>
  );
};

export default Notes;
