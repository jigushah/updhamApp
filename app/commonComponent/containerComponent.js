import React from 'react';
import {Image, ImageBackground, ScrollView, View} from 'react-native';
import Header from './headerComponent';
class CardComponent extends React.Component {
  render() {
    let { children, title } = this.props;
    return (
      <View style={{ flex: 1 }} >
        <ImageBackground  resizeMode={'contain'} source={require('../images/tapasvi.png')} style={{ width: null, height: null, }}>
          <ScrollView style={{ padding: 0, backgroundColor: 'rgba(255,255,255,0.7)' }}>
            {children}
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

export default CardComponent