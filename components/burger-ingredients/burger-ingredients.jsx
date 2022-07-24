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
import { ingredients } from "../utils/data";
import Ingredient from "./ingredient";

const BurgerIngredients = () => {
  const renderIngredient = (item) => <Ingredient props={item} key={item._id} />;

  const ingredientsBun = ingredients.filter((ingredient) => {
    return ingredient.type === "bun";
  });
  const ingredientsSauce = ingredients.filter((ingredient) => {
    return ingredient.type === "sauce";
  });
  const ingredientsMain = ingredients.filter((ingredient) => {
    return ingredient.type === "main";
  });

  return (
    <SafeAreaView>
      <Text style={burgerIngredientsStyle.title}>Соберите бургер</Text>
      <View style={burgerIngredientsStyle.ingredients__tabContainer}>
        <View
          style={[
            burgerIngredientsStyle.tab_locked,
            burgerIngredientsStyle.tab_checked,
          ]}
        >
          <Text style={burgerIngredientsStyle.tab}>Булки</Text>
        </View>
        <View style={burgerIngredientsStyle.tab_locked}>
          <Text style={burgerIngredientsStyle.tab}>Соусы</Text>
        </View>
        <View style={burgerIngredientsStyle.tab_locked}>
          <Text style={burgerIngredientsStyle.tab}>Начинки</Text>
        </View>
      </View>

      <View style={burgerIngredientsStyle.ingredients__section}>
        <Text style={burgerIngredientsStyle.text_large}>Булки</Text>
        {ingredientsBun.map((item) => renderIngredient(item))}
        <Text style={burgerIngredientsStyle.text_large}>Соусы</Text>
        {ingredientsSauce.map((item) => renderIngredient(item))}
        <Text style={burgerIngredientsStyle.text_large}>Начинки</Text>
        {ingredientsMain.map((item) => renderIngredient(item))}
      </View>
    </SafeAreaView>
  );
};

const burgerIngredientsStyle = StyleSheet.create({
  ingredients__section: {},
  ingredients__tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: "#F2F2F3",
    fontWeight: "600",
    fontSize: 38,
    textAlign: "center",
  },
  tab: {
    width: 130,
    padding: 16,
    color: "#F2F2F3",
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
  },
  tab_locked: {
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    marginBottom: 20,
  },
  tab_checked: {
    borderBottomWidth: 3,
    borderBottomColor: "#4C4CFF",
    marginBottom: 20,
  },
  text_large: {
    fontWeight: "700",
    fontSize: 28,
    color: "#F2F2F3",
    marginLeft: 10,
  },
});

export default BurgerIngredients;
