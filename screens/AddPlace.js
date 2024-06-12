import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../utils/database";

const AddPlace = ({ navigation }) => {
  async function createPlaceHndler(place) {
    await insertPlace(place);
    navigation.navigate("AllPlaces");
    //  { place: place });
  }
  return <PlaceForm onCreatePlace={createPlaceHndler} />;
};

export default AddPlace;

const styles = StyleSheet.create({});
