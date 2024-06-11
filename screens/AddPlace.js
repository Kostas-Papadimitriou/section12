import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PlaceForm from "../components/Places/PlaceForm";

const AddPlace = ({ navigation }) => {
  function createPlaceHndler(place) {
    navigation.navigate("AllPlaces", { place: place });
  }
  return <PlaceForm onCreatePlace={createPlaceHndler} />;
};

export default AddPlace;

const styles = StyleSheet.create({});
