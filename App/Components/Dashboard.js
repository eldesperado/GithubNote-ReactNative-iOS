import React, {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

var API = require("../Utils/API");
var Profile = require("./Profile");
var Repositories = require("./Repositories");

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    alignSelf: "center"
  }
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: this.props.userInfo
    };
  }

  makeBackground(btn) {
      var obj = {
        flexDirection: "row",
        alignSelf: "stretch",
        justifyContent: "center",
        flex: 1
      };

      if(btn === 0) {
        obj.backgroundColor = "#48BBEC";
      } else if(btn === 1) {
        obj.backgroundColor = "#E77AAE";
      } else {
        obj.backgroundColor = "#758BF4";
      }

      return obj;
    }

  goToProfile() {
    this.props.navigator.push({
      title: "Profile",
      component: Profile,
      passProps: {userInfo: this.state.userInfo}
    })
  }

  goToRepos() {
    API.getRepos(this.state.userInfo.login)
      .then((repos) => {
        this.props.navigator.push({
          title: "Repositories",
          component: Repositories,
          passProps: {
            userInfo: this.state.userInfo,
            repos: repos
          }
        });
      })
      .done();
  }

  goToNotes() {

  }

  render() {
    return(
      <View style={styles.container}>
        <Image style={styles.image}
          source={{uri: this.state.userInfo.avatar_url}} />
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile.bind(this)}
          underlayColor="#88D4F5">
          <Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos.bind(this)}
          underlayColor="#88D4F5">
          <Text style={styles.buttonText}> View Repositories </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToProfile.bind(this)}
          underlayColor="#88D4F5">
          <Text style={styles.buttonText}> View Notes </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = Dashboard;
