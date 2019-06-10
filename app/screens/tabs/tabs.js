import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import ScheduleScreen from '../schedule/index'
import FormScreen from '../form/index'
import NoteScreen from '../Note/index'
import DocumentScreen from '../document/index'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialUIIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const TabNavigator = createBottomTabNavigator({
  Schedule: ScheduleScreen,
  Form: FormScreen,
  Notes: NoteScreen,
  Document: DocumentScreen,
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = MaterialUIIcons;
        let iconName;
        if (routeName === 'Document') {
          iconName = 'dictionary';
        } else if (routeName === 'Notes') {
          iconName = `clipboard-check-outline`;
          IconComponent = MaterialUIIcons
        } else if(routeName === 'Schedule'){
          iconName = 'calendar-clock'
          IconComponent = MaterialUIIcons
        } else if(routeName === 'Form'){
          iconName = 'account-badge'
          IconComponent = MaterialUIIcons
        } else if (routeName === 'Info') {
          iconName = 'information';
          IconComponent = MaterialUIIcons
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      inactiveBackgroundColor:'rgba(1,168,202,0.41)',
      activeBackgroundColor:'rgba(1,168,202,0.41)',
    },
    lazy:false
  });

export default TabNavigator;