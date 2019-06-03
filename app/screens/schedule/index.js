import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import Container from '../../commonComponent/containerComponent';
const { width } = Dimensions.get('window');
class ScheduleScreen extends React.Component {
  render() {
    return (
      <Container title="Schedule">
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image resizeMode={'contain'} style={{ width: width * 0.49, height: width * 0.49 }} source={require('../../images/01.png')} />
            <Image resizeMode={'contain'} style={{ width: width * 0.49, height: width * 0.49 }} source={require('../../images/03.png')} />

          </View>
          <View style={{ paddingTop: 50 }}>
            <Image resizeMode={'contain'} style={{ width: width * 0.49, height: width * 0.49 }} source={require('../../images/02.png')} />
            <Image resizeMode={'contain'} style={{ width: width * 0.49, height: width * 0.49 }} source={require('../../images/04.png')} />
          </View>
        </View>
        <View style={{ alignSelf: 'center' }}>
          <Image resizeMode={'contain'} style={{ width: width * 0.8, height: width * 0.5 }} source={require('../../images/05.png')} />
        </View>
      </Container>
    );
  }
}

export default ScheduleScreen