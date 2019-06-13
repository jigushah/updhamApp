import React from 'react';
import {StatusBar, StyleSheet, TouchableOpacity,Text} from 'react-native';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {Provider} from 'react-redux'
import {store} from './app/store/store'
import Video from 'react-native-video';
import RootStack from './app/screens/tabs/tabs'
import MainVideo from './app/images/vid.mp4'
import SplashScreen from 'react-native-splash-screen'


let Navigation = createAppContainer(RootStack);

export default class App extends React.Component {

    componentDidMount() {
        SplashScreen.hide();
        StatusBar.setHidden(true);
    }

    constructor(props) {
        super(props);
        this.state = {
            isClosed: 0
        }
    }
    onPress = () => {
        this.setState({
            isClosed: 1
        })
    };

    render() {
        if (this.state.isClosed === 0) {
            return (
                <Provider store={store}>
                    <SafeAreaView style={{flex: 1}}>
                        <Video source={MainVideo}
                               ref={(ref) => {
                                   this.player = ref
                               }}
                               style={styles.backgroundVideo} />

                        <TouchableOpacity onPress={this.onPress} style={styles.submitButton}>
                            <Text style={{color: 'white', padding: 10, margin: 10, textAlign: 'center'}}> Close </Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                </Provider>
            );
        } else {
            return (
                <Provider store={store}>
                    <SafeAreaView style={{flex: 1}}>
                        <Navigation/>
                    </SafeAreaView>
                </Provider>
            );
        }
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'black'
    },
    submitButton: {
        flex:1,
        position: 'absolute',
        bottom:0,
        right: 0,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        backgroundColor: 'rgba(255,255,255,0.31)',
        textAlign: 'center'

    }
});