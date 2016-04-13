import React, {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ScrollView
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: "column",
    flex: 1,
    padding: 10
  },
  name: {
    color: "#48BBEC",
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: "#48BBEC",
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

class Repositories extends React.Component {
  render() {
    var repos = this.props.repos;
    var list = repos.map((repo, index) => {
      var desc = repo.description ? <Text style={styles.description}> {repo.description} </Text> : <View />;

      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <Text style={styles.name}> {repo.name} </Text>
            <Text style={styles.stars}> {repo.stargazers_count} </Text>
            {desc}
          </View>
        </View>
      )
    });

    return (
      <ScrollView style={styles.container}>
        {list}
      </ScrollView>
    )
  }
}

module.exports = Repositories;
