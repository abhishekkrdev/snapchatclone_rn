import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';

const ButtonComp = props => {
  const {btnText, customOnPress, btnStyle = {}} = props;
  return (
    <TouchableOpacity
      style={[styles.btnStyle, btnStyle]}
      onPress={customOnPress}
      activeOpacity={0.5}>
      <Text style={styles.textStyle}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.red,
    height: 62,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: colors.white,
    fontFamily: fontFamily.bold,
    fontSize: 24,
    textTransform: 'uppercase',
  },
});
