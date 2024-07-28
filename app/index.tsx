import { useState } from "react";
import { Text, View, Pressable } from "react-native";
import { styles } from "./styles";

export default function Index() {
  const [bgColor, setBgColor] = useState("white");
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const onPress = () => setBgColor(randomColor);

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.text}>Clique aqui para mudar a cor</Text>
      </Pressable>
    </View>
  );
}
