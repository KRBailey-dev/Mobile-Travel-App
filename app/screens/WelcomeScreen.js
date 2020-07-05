import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from "react-native";

class WelcomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/Tour.jpeg")}
      >
        <View style={styles.logoBackground}></View>
        <Image style={styles.logo} source={require("../assets/Travel.jpg")} />
        <View style={styles.adventure}>
          <Text style={styles.logoText}>Travel made easy</Text>
        </View>
        <View style={styles.welcome}></View>
        <View style={styles.welcomeButton}>
          <Button
            title="Start Here"
            onPress={() => this.props.navigation.navigate("Travel")}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoBackground: {
    backgroundColor: "grey",
    width: "100%",
    height: 200,
    top: 0,
    position: "absolute",
  },
  adventure: {
    color: "#fff",
    position: "absolute",
    flex: 1,
    justifyContent: "center",
  },
  logoText: {
    color: "#fff",
    bottom: 240,
    fontSize: 30,
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 50,
    borderRadius: 100,
  },
  welcomeButton: {
    position: "absolute",
    backgroundColor: "white",
    width: 170,
    padding: 15,
    height: 70,
    bottom: 20,
    borderRadius: 100,
  },
});

export default WelcomeScreen;
