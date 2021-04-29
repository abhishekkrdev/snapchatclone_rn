import React from 'react';
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import ButtonComp from '../../components/ButtonComp/ButtonComp';

import navigationStrings from '../../constants/navigationStrings';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';

const InitialScreen = ({navigation}) => {
  return (
    <ImageBackground style={styles.container} source={imagePath.bgImage}>
      <SafeAreaView>
        <ButtonComp
          btnText="Login"
          btnStyle={{backgroundColor: colors.red}}
          customOnPress={() => navigation.navigate(navigationStrings.LOGIN)}
        />
        <ButtonComp
          btnText="Sign up"
          btnStyle={{backgroundColor: colors.blue}}
          customOnPress={() => navigation.navigate(navigationStrings.SIGNUP)}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
