import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import mapMarker from "../../assets/map-marker.png";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import {
  Nunito_600SemiBold,
  Nunito_800ExtraBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import styles from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import api from "../../service/api";

interface OrphanagesProps {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}
const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<OrphanagesProps[]>([]);

  console.log(orphanages);
  const { navigate } = useNavigation();

  const handleNavigationToDetails = (id: number) => {
    navigate("OrphanagesDetails", { id });
  };

  const handleNavigationToCreateOrphanage = () => {
    navigate("SelectMapPosition");
  };

  useFocusEffect(() => {
    api.get("orphanages").then((response) => setOrphanages(response.data));
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -7.1210509,
          longitude: -34.8451573,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {orphanages.map((orphanage) => (
          <Marker
            key={orphanage.id}
            calloutAnchor={{ x: 2.7, y: 0.8 }}
            icon={mapMarker}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
            }}
          >
            <Callout
              tooltip={true}
              onPress={() => handleNavigationToDetails(orphanage.id)}
            >
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{orphanage.name}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>{orphanages.length} Orfanatos encontrados</Text>
        <RectButton
          style={styles.createOrphanagesButton}
          onPress={handleNavigationToCreateOrphanage}
        >
          <Feather name="plus" size={20} color="#fff" />
        </RectButton>
      </View>
    </View>
  );
};

export default OrphanagesMap;
