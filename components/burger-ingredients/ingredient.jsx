import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  Image,
} from "react-native";
const Ingredient = ({ props }) => {
  return (
    <View style={ingredientStyle.container}>
      <Image
        source={{
          width: 150,
          height: 150,
          uri: props.image,
        }}
      />
      <Text style={ingredientStyle.text}>{props.name}</Text>
      <Text style={ingredientStyle.text}>Цена: {props.price}</Text>
      <Button title="Добавить" color={"#4C4CFF"} />
    </View>
  );
};

const ingredientStyle = StyleSheet.create({
  text: {
    color: "#F2F2F3",
    fontWeight: "400",
    fontSize: 14,
    textAlign: "center",
  },
  container: {
    alignItems: "center",
  },
});

export default Ingredient;
