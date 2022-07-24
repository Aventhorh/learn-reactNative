import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  Image,
} from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={headerStyle.container}>
      <Image />
      <View style={headerStyle.button}>
        <Button title="Ваш заказ" color={"#4C4CFF"} />
      </View>
    </SafeAreaView>
  );
};
const headerStyle = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    borderWidth: 2,
    borderColor: "#4C4CFF",
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
});

export default Header;
