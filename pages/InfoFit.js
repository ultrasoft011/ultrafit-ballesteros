import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";

const InfoFit = () => {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const onChangeItem = (t) => {
    setTextItem(t);
  };

  const addItem = () => {
    setItemList((element) => [
      ...element,
      {
        id: Math.floor(Math.random() * (500 - 1) + 1).toString(),
        value: textItem,
      },
    ]);
    setTextItem("");
  };

  const onHandlerDelete = (id) => {
    setItemList((elements) => elements.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: "row" }}>
      <Text style={styles.listFood}>
        ID: {item.id} Item: {item.value}
      </Text>
      <Pressable
        style={styles.removeButton}
        onPress={() => onHandlerDelete(item.id)}
      >
        {" "}
        <Text
          style={{
            color: "#fff8dc",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 11,
          }}
        >
          Remove
        </Text>
      </Pressable>
    </View>
  );

  return (
    <View>
      <Header title={"UltraFit"} />

      <View style={{ padding: 30, backgroundColor: "#f0f8ff" }}>
        <Text style={styles.appDescription}>
          Please type in the next box the food which you want to see more
          details..
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Descripcion item"
            value={textItem}
            autoCapitalize="none"
            autoComplete={false}
            onChangeText={onChangeItem}
            maxLength={13}
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              width: 200,
              marginBottom: 35,
            }}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Pressable
            style={styles.addButton}
            onPress={addItem}
            disabled={!textItem}
          >
            <Text
              style={{
                color: "#fff8dc",
                textAlign: "center",
                fontWeight: "bold",
                paddingTop: 5,
              }}
            >
              Add item
            </Text>
          </Pressable>
        </View>
        <View style={styles.itemBox}>
          <View style={{ flexDirection: "row" }}>
            <FlatList data={itemList} renderItem={renderItem} />
          </View>
        </View>
        {/* <View style={styles.itemBox}>
            {itemList.map((item) => (
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.listFood}>
                  ID: {item.id} Item: {item.value}{" "}
                </Text>
                <Pressable
                  style={styles.removeButton}
                  onPress={() => onHandlerDelete(item.id)}
                >
                  {" "}
                  <Text
                    style={{
                      color: "#fff8dc",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: 11,
                    }}
                  >
                    Remove
                  </Text>
                </Pressable>
              </View>
            ))}
                  </View> */}
        <StatusBar style="auto" />
        <View style={{ marginBottom: 20 }}>
          <Pressable
            style={styles.nextButton}
            onPress={addItem}
            disabled={!textItem}
          >
            <Text
              style={{
                color: "#fff8dc",
                textAlign: "center",
                fontWeight: "bold",
                paddingTop: 5,
              }}
            >
              Continue
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    alignItems: "center",
  },
  appDescription: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Monaco",
    justifyContent: "center",
    marginBottom: 30,
  },
  listFood: {
    backgroundColor: "#7b68ee",
    color: "#fff",
    borderRadius: 5,
    flex: 1,
    padding: 7,
    marginRight: 10,
    marginTop: 10,
  },
  addButton: {
    alignSelf: "center",
    backgroundColor: "#572eb0",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    height: 30,
    width: 150,
  },
  removeButton: {
    alignSelf: "center",
    backgroundColor: "#dc143c",
    borderRadius: 5,
    height: 20,
    width: 60,
    paddingTop: 3,
    marginTop: 8,
  },
  nextButton: {
    alignSelf: "center",
    backgroundColor: "#17C9C4",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    height: 30,
    width: 150,
    marginTop: 50,
  },
  itemBox: {
    alignSelf: "center",
    marginTop: 30,
  },
});



export default InfoFit;
