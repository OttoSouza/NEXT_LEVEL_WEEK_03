import React from "react";
import { Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import style from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
interface HeaderProps {
  title: string;
  showCancel?: boolean;
}
const Header: React.FC<HeaderProps> = ({ title, showCancel = true }) => {
  const { goBack, navigate } = useNavigation();

  const handleGoBack = () => {
    navigate("OrphanagesMap");
  };
  return (
    <View style={style.container}>
      <BorderlessButton onPress={goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>
      <Text style={style.title}>{title}</Text>

      {showCancel ? (
        <BorderlessButton onPress={handleGoBack}>
          <Feather name="x" size={24} color="#ff669d" />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  );
};

export default Header;
