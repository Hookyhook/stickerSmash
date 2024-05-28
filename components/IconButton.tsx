import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, View, Text, StyleSheet } from "react-native";

export default function IconButton({ label, icon, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.iconButton}>
      <MaterialIcons size={24} name={icon} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
