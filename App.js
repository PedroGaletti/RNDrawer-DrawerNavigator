import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import { DrawerNavigator, DrawerItems } from 'react-navigation';

import HomeScreen from './app/components/homeScreen/HomeScreen';
import SettingsScreen from './app/components/settingsScreen/SettingsScreen';

import { Container, Content, Header, Body, Icon } from 'native-base';

export default class App extends Component {
  render() {
    return (
      <MyApp />
    );
  }
}

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={{ height: 200, backgroundColor: 'white' }}>
      <Body style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image style={styles.drawerImage} source={require('./app/img/background.jpg')} />
      </Body>
    </Header>

    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const MyApp = DrawerNavigator ({
  Home: {
    screen: HomeScreen
  }, 
  Settings: {
    screen: SettingsScreen
  }
}, {
  initialRouteName: 'Home',
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
  }
});
