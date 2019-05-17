/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/solkaz/react-native-template-ts-detox-jest
 *
 */

import React, { Component } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";

const data = Array.from({ length: 50 }, (x) => Math.floor(Math.random() * 100));

export default class App extends Component {
  public render() {
    return (
      <View testID="welcome" style={styles.container}>
        <FlatList
          data={data}
          inverted
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }

  private renderItem = ({ item, index }: ListRenderItemInfo<number>) => (
    <View>
      <Text testID={index.toString()}>
        {item} - {index}
      </Text>
    </View>
  );
  private keyExtractor = (_: unknown, index: number) => index.toString();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
