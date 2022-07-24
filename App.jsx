import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import Header from "./components/header/header";

function App() {
  return (
    <SafeAreaView style={appStyles.container}>
      <ScrollView>
        <Header />
        <BurgerIngredients />
      </ScrollView>
    </SafeAreaView>
  );
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
    backgroundColor: "#131316",
  },
});

export default App;
