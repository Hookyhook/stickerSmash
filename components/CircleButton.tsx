import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

export default function CircleButton({ onPress }) {
  return (
    <View style={styles.circleButtoneContainer}>
      <Pressable onPress={onPress} style={styles.circleButton}>
        <MaterialIcons name="add" size={38} />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  circleButtoneContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderRadius: 42,
    padding: 3,
    borderColor: "#ffd33d",
  },
  circleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },
});
