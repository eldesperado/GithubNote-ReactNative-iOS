import React, {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';

var Badge = require("./Badge");

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center"
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: "#48BBEC",
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});


class Profile extends React.Component {
  getRowTitle(item) {
    var tokens = item.split("_");

    return tokens.map((token) => token[0].toUpperCase() + token.slice(1)).join(" ");
  }

  render() {
    var userInfo = this.props.userInfo;
    var topicArray = [
      "company",
      "location",
      "followers",
      "following",
      "email",
      "bio",
      "public_repos"
    ];

    var list = topicArray.map((item, index) => {
      if (!userInfo[item]) {
        return (
          <View key={index}/>
        );
      }

      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <Text style={styles.rowTitle}>{this.getRowTitle(item)}</Text>
            <Text style={styles.rowContent}> {userInfo[item]} </Text>
          </View>

        </View>
      )
    });

  return (
    <ScrollView style={styles.container}>
      <Badge userInfo={userInfo}></Badge>
      {list}
    </ScrollView>
  )
}
}

module.exports = Profile;
