import React from 'react';
import {Text, View, ScrollView, Dimensions, Image, TouchableOpacity} from 'react-native';
import Header from '../../commonComponent/headerComponent';
import Card from '../../commonComponent/cardComponent'
import {getDocument} from '../../actions/formAction'
import {connect} from 'react-redux';
import {BASE_URL} from '../../api/urlMapper'
import ImageZoom from 'react-native-image-pan-zoom';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('window');

class DocumentScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPopUpOpen: false,
            currentImage: ''
        }
    }

    componentWillMount() {
        this.props.getDocument()
    }

    static navigationOptions = {
        title: 'ગેલેરી',
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <Header title="ગેલેરી"/>
                <ScrollView style={{flex: 1}}>
                    <View style={{paddingTop: 10, flexDirection: 'row', flexWrap: 'wrap'}}>
                        {this.props.document && this.props.document.map((doc, i) => {
                            return <TouchableOpacity key={i} onPress={() => {
                                this.setState({
                                    isPopUpOpen: true,
                                    currentImage: `${doc.event_file}`
                                })
                            }}><Image
                                resizeMode={'contain'}
                                style={{width: width * 0.45, height: width * 0.30, margin: 5}}
                                source={{uri: `${doc.event_file}`}}/></TouchableOpacity>
                        })}
                    </View>
                </ScrollView>
                {this.state.isPopUpOpen && <View style={{
                    backgroundColor: "rgba(255,255,255,0.8)",
                    right: 0, left: 0, top: 10, bottom: 0,
                    position: 'absolute'
                }}>
                    <TouchableOpacity style={{alignItems: 'flex-end', padding: 5}} onPress={() => {
                        this.setState({
                            isPopUpOpen: false,
                            currentImage: ''
                        })
                    }}>
                        <Ionicons name='ios-close-circle' size={20} color={'gray'}/>
                    </TouchableOpacity>
                    <ImageZoom cropWidth={Dimensions.get('window').width}
                               cropHeight={Dimensions.get('window').height}
                               imageWidth={width * 0.70}
                               imageHeight={height * 0.70}>
                        <Image resizeMode={'contain'}
                               style={{width: width * 0.70, height: height * 0.70, margin: 5}}
                               source={{uri: this.state.currentImage}}/>
                    </ImageZoom>
                </View>}
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
