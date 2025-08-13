import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../../Constants/Colors";

export default function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 2,
    borderRadius: deviceHeight < 650 ? 20 : 40,
    padding: deviceHeight < 650 ? 6 : 12,
    marginVertical: deviceHeight < 650 ? 4 : 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: deviceHeight < 650 ? 2 : 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: deviceHeight < 650 ? 1 : 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
