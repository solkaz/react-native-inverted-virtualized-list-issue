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
          testID="invertedList"
          data={data}
          inverted
          renderItem={this.renderItem("inverted")}
          keyExtractor={this.keyExtractor}
        />
        <FlatList
          testID="uninvertedList"
          data={data}
          renderItem={this.renderItem("uninverted")}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }

  private renderItem = (prefix: "inverted" | "uninverted") => ({
    item,
    index,
  }: ListRenderItemInfo<number>) => (
    <View>
      <Text testID={`${prefix}-${index.toString()}`}>
        {item} - {index}
      </Text>
    </View>
  );
  private keyExtractor = (_: unknown, index: number) => index.toString();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F5FCFF",
  },
});
