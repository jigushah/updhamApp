import React from 'react';
import { Text, View, ScrollView, Dimensions, Image } from 'react-native';
import Header from '../../commonComponent/headerComponent';
import Card from '../../commonComponent/cardComponent'
import { getDocument } from '../../actions/formAction'
import { connect } from 'react-redux';
import { BASE_URL } from '../../api/urlMapper'
const { height, width } = Dimensions.get('window');

class DocumentScreen extends React.Component {
  componentWillMount(){
    this.props.getDocument()
  }
  static navigationOptions = {
    title: 'ગેલેરી',
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="ગેલેરી" />
        <ScrollView style={{ flex: 1 }}>
          <View style={{ paddingTop: 10, flexDirection: 'row', flexWrap: 'wrap' }}>
            {this.props.document && this.props.document.map((doc,i) => {
              return <Image key={i} resizeMode={'contain'} style={{ width: width * 0.45, height: width * 0.30, margin:5 }} source={{uri:`${doc.event_file}`}} />
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    document: state.root.form.document
  }
};

const mapDispatchToProps = {
  getDocument
};

export default connect(mapStateToProps, mapDispatchToProps)(DocumentScreen)
  