import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const PlacesList = ({ places }) => {
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => {
        item.id;
      }}
      renderItem={({ item }) => {
        second;
      }}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({});
