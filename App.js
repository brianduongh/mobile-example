import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'react-native-firebase';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
    };
  }

  componentDidMount() {
    firebase.auth().signInAnonymously()
      .then(() => {
        this.setState({
          isAuthenticated: true,
        });
      });
  }

  render() {
    // If the user has not authenticated
    if (!this.state.isAuthenticated) {
      return <View><Text>Not signed in</Text></View>;
    }

    return (
      <View>
        <Text>Welcome to my awesfdfd</Text>
      </View>
    );
  }

}

export default App;
