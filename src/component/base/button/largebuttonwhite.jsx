import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from '../../../css/button';

const LargeButtonWhite = ({label = '', onPress}) => {
  return (
    <View>
      <Pressable style={styles.largebuttonwhite} onPress={onPress}>
        <Text style={styles.buttonTextpurple}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default LargeButtonWhite;
