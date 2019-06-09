import React from 'react';
import { View } from 'react-native'
import { Header, Text, Left, Right, Body } from 'native-base';

class HeaderComponent extends React.Component {
  render() {
    let { title } = this.props;
    return (
        <View style={{ height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor:'white', borderBottomColor: 'rgba(0,0,0,0.11)', borderBottomWidth: 1 }}>
          <Text style={{ color: 'rgba(1,168,202,0.8)', fontSize: 20 }}>{title}</Text>
        </View>
    );
  }
}

export default HeaderComponent