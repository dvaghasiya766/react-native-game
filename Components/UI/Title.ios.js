import { StyleSheet, Text, Dimensions, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  title: {
    fontStyle: "open-sans-bold",
    fontSize: deviceHeight < 600 ? 20 : 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 0 : 2,
    borderWidth: Platform.select({ ios: 2, android: 0 }),
    borderColor: "#fff",
    padding: deviceHeight < 650 ? 8 : 12,
    maxWidth: "80%",
    width: 300,
  },
});
