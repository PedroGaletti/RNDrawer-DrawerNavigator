import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import { Icon, Button, Container, Header, Content, Left } from 'native-base';

export default class SettingsScreen extends Component {
    static navigationOptions = {
        drawerIcon:(
            <Image source={require('./img/settings.png')} style={{ height: 24, width: 24 }} />
        )
    }
  render() {
    return (
        <Container>
          <Header style={styles.headerStyle}>
            <Left style={styles.leftStyle}>
              <Icon ios='ios-menu' android="md-menu"
              onPress={ () => this.props.navigation.navigate('DrawerOpen')}/>
            </Left>
          </Header>
          <Content contentContainerStyle={styles.contentContainerStyle}>
              <Text>
                  Settings Screen
              </Text>
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create ({
    contentContainerStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerStyle: {
      position: 'relative'
    },
    leftStyle: {
      position: 'absolute',
      left: 24
    }
  })