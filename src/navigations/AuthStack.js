import React, {Fragment} from 'react';

import {InitialScreen, Login, Signup} from '../screens';
import navigationStrings from '../constants/navigationStrings';

const AuthStack = Stack => {
  return (
    <Fragment>
      <Stack.Screen
        name={navigationStrings.INITIAL_SCREEN}
        component={InitialScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.SIGNUP}
        component={Signup}
        options={{headerShown: false}}
      />
    </Fragment>
  );
};

export default AuthStack;
