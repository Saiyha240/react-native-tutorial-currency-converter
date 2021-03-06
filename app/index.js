import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home'

EStyleSheet.build({
    $primaryBlue: '#4f6d7a',
    $white: '#FFFFFF',
    $lightGray: '#F0F0F0',
    $border: '#979797',
    $inputText: '#797979'
});

export default () => <Home/>;
