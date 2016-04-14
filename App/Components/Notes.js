import React, {
  StyleSheet,
  View,
  Text,
  ListView,
  TextInput,
  TouchableHighlight
} from 'react-native';

var API = require("../Utils/API");
var Badge = require("./Badge");

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  buttonText: {
    fontSize: 18,
    color: "white"
  },
  button: {
    height: 60,
    backgroundColor: "#48BBEC",
    flex: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  searchInput: {
    height: 60,
    padding: 10,
    fontSize: 18,
    color: "#111",
    flex: 10
  },
  rowContainer: {
    padding: 10,
  },
  footerContainer: {
    backgroundColor: "#E3E3E3",
    alignItems: "center",
    flexDirection: "row"
  }
});

class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.notes),
      note: "",
      error: ""
    };
  }

  handleChange(event) {
    this.setState({
      note: event.nativeEvent.text
    });
  }

  handleSubmit() {
    var note = this.state.note;

    this.setState({
      note: ""
    });

    API.addNote(this.props.userInfo.login, note)
      .then((data) => {
        API.getNotes(this.props.userInfo.login)
          .then((notes) => {
            this.setState({
              dataSource: this.ds.cloneWithRows(notes)
            });
          })
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          error: error
        });
      });
  }

  renderRow(rowData) {
    return(
      <View>
        <View style={styles.rowContainer}>
          <Text> {rowData} </Text>
        </View>
      </View>
    )
  }

  footer() {
      return (
        <View style={styles.footContainer}>
          <TextInput
            style={styles.searchInput}
            value={this.state.note}
            onChange={this.handleChange.bind(this)}
            placeholder="New Note" />
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit.bind(this)}
            underlayColor="#88D4F5">

            <Text style={styles.buttonText}> Submit </Text>
          </TouchableHighlight>
        </View>
      )
    }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={this.renderRow}
          renderHeader={() => <Badge userInfo={this.props.userInfo} />} />
        {this.footer()}
      </View>
    )
  }
}

Notes.propTypes = {
  userInfo: React.PropTypes.object.isRequired,
  notes: React.PropTypes.object.isRequired
};

module.exports = Notes;
