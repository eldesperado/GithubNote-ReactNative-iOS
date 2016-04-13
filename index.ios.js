/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

var Main = require("./App/Components/Main");
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111"
  }
});

class githubNotetaker extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: Main,
          title: 'Github Notetaker'
        }}
      />
    );
  }
}


AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
