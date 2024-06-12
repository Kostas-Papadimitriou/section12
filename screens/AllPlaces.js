import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../utils/database";

const AllPlaces = ({ route }) => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }
    // if (isFocused && route.params) {
    if (isFocused) {
      loadPlaces();
      // setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }

    // }, [isFocused, route]);
  }, [isFocused]);
  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;

const styles = StyleSheet.create({});
