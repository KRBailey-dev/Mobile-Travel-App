import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ScrollView,
} from "react-native";

class ShoppingScreen extends Component {
  render() {
    return (
      <View style={styles.travelBackground}>
        <View style={styles.imageContainer}>
          <ScrollView style={styles.scrollView}>
            <Image
              style={styles.city}
              source={require("../assets/City.jpeg")}
            />
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              congue molestie nisl, ut consectetur quam ultricies sit amet. Nunc
              mattis.
            </Text>
            <Image
              style={styles.city}
              source={require("../assets/China.jpg")}
            />
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              congue molestie nisl, ut consectetur quam ultricies sit amet. Nunc
              mattis.
            </Text>
            <Image
              style={styles.city}
              source={require("../assets/Cliffs.jpg")}
            />
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              congue molestie nisl, ut consectetur quam ultricies sit amet. Nunc
              mattis.
            </Text>
            <Image style={styles.city} source={require("../assets/Oahu.jpg")} />
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              congue molestie nisl, ut consectetur quam ultricies sit amet. Nunc
              mattis.
            </Text>
            <Image
              style={styles.city}
              source={require("../assets/Europe.jpg")}
            />
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              congue molestie nisl, ut consectetur quam ultricies sit amet. Nunc
              mattis.
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  travelBackground: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  city: {
    width: 400,
    height: 300,
    padding: 1,
  },
  china: {
    width: 400,
    height: 300,
    padding: 1,
  },
  cliffs: {
    width: 400,
    height: 300,
    padding: 1,
  },
  oahu: {
    width: 400,
    height: 300,
    padding: 1,
  },
  europe: {
    width: 400,
    height: 300,
    padding: 1,
  },
  paragraph: {
    fontSize: 16,
  },
});

export default ShoppingScreen;
