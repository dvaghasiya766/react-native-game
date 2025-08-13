import { StyleSheet, Text, Dimensions } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  title: {
    fontStyle: "open-sans-bold",
    fontSize: deviceWidth < 380 ? 20 : 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    borderWidth: deviceHeight < 650 ? 1 : 2,
    borderColor: "#fff",
    padding: deviceHeight < 650 ? 8 : 12,
    maxWidth: "80%",
    width: 300,
  },
});
