import { View, Text, StyleSheet } from "react-native";

export const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Here will be comments to your post</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
