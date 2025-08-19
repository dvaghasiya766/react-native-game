import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from "react-native";

import PrimaryButton from "../Components/UI/PrimaryButton";
import Colors from "../Constants/Colors";
import Title from "../Components/UI/Title";
import Card from "../Components/UI/Card";
import InstructionText from "../Components/UI/InstructionText";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber.trim(), 10);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  const marginTopDistance = height < 450 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText style={styles.instructionText}>
              Enter a Number
            </InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              cursorColor={Colors.accent500}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: deviceHeight < 450 ? 30 : 100,
    alignItems: "center",
  },
  numberInput: {
    height: deviceHeight < 650 ? 45 : 50,
    width: deviceHeight < 650 ? 45 : 50,
    fontSize: deviceWidth < 380 ? 18 : 20,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: deviceHeight < 650 ? 1 : 2,
    color: Colors.accent500,
    paddingBottom: deviceHeight < 650 ? 0 : 5,
    marginVertical: deviceHeight < 650 ? 4 : 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: deviceHeight < 650 ? 5 : 10,
  },
  buttonContainer: {
    flex: 1,
  },
});
