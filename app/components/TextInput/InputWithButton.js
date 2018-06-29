import React from 'react';
import color from 'color';

import PropTypes from 'prop-types';
import styles from './styles';
import {Text, TextInput, TouchableHighlight, View} from "react-native";

const InputWithButton = (props) => {
  const {onPress, buttonText, editable = true} = props;

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
      styles.$buttonBackgroundColorModifier
  );

  const containerStyles = [styles.container];

  if( editable === false ){
      containerStyles.push(styles.containerDisabled);
  }

  return (
      <View style={containerStyles}>
          <TouchableHighlight
              style={styles.buttonContainer}
              onPress={onPress}
              underlayColor={underlayColor}>
              <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableHighlight>
          <View style={styles.separator}/>
          <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              keyboardType="numeric"/>
      </View>
  );
};

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool
}

export default InputWithButton;
