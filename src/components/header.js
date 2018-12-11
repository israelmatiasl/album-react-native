//Import library for making a Component
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Make a component
const Header = (props) => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    paddingTop: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#000',
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
});

//Make the component available to other parts of the app
export default Header;
