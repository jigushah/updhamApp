import React from 'react';
import { View, TextInput } from 'react-native'
import { Header, Text, Left, Right, Body } from 'native-base';


class FormFieldTitle extends React.Component {
  render() {
    let { title } = this.props;
    return (
      <View style={{ justifyContent: 'center', marginTop: 20 }}>
        <Text style={{color:'rgb(161,28,200)', fontWeight:"800"}}>{title}</Text>
      </View>
    );
  }
}

class FormFieldError extends React.Component {
  render() {
    let { error, touched } = this.props;
    return (
      <View style={{ justifyContent: 'center' }}>
        <Text style={{ color: 'red' }}>{error}</Text>
      </View>
    );
  }
}

class FormFieldInput extends React.Component {
  render() {
    let { onChangeTextInput, keyboardType, value } = this.props;
    return (
      <TextInput
      value={value}
      keyboardType={keyboardType || 'default'}
                  style={{
                    borderWidth: 2,
                    borderColor: 'rgb(31,150,0)',
                    padding: 10,
                    marginBottom: 3,
                    borderRadius:5,
                    backgroundColor:'rgb(246,246,246)'
                  }}
                  onChangeText={(text) => onChangeTextInput(text)}
                />
    );
  }
}

export { FormFieldError, FormFieldTitle, FormFieldInput }