import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-navigation';
import Container from '../../commonComponent/containerComponent2';
import Title from '../../commonComponent/titleComponent';
import { DoData } from '../../utils/doNdontNotes';
class NotesScreen extends React.Component {
  renderItem = (item, index) => {
    return (
      <View key={index} style={{ paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderColor: 'lightgray' }}>
        <Text style={{ color: 'rgb(218,31,38)', flex: 15 }}> {item}</Text>
      </View>
    );
  };
  static navigationOptions = {
    title: 'સૂચનાઓ',
  };
  render() {
    return (
      <Container title={'સૂચનાઓ'}>
        <Title customStyle={{ color: 'rgb(119,22,22)', fontWeight: '600',padding:10 }} text={'ઉપઘાન તપના જરરી નિયમો તથા સૂચનાઓ'} />
        <FlatList
          data={DoData}
          renderItem={({ item, index }) => this.renderItem(item, index)}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ padding: 10, alignItems: 'stretch' }}
        />
      </Container>
    );
  }
}

export default NotesScreen