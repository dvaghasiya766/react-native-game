import { StyleSheet, Text, Dimensions } from "react-native";

import Colors from "../../Constants/Colors";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 18 : 24,
  },
});
