import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {props.rounds}</Text>
      <Text>Correct Number was: {props.answer}</Text>
      <View>
        <Button 
          title="New Game"
          onPress={props.onRestart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
