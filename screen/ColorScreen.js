
import React, { useContext} from "react";
import { View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CreateContext } from "./CreateContext";

const ColorScreen = () => {
  const charTypes = [
    {
      color: require("../assets/Rectangle_4.png"),
      image: require("../assets/vs_silver.png"),
      name: "Điện Thoại Vsmart Joy 3 Hàng chính hãng",
      colorName: "Silver",
      provider: "Tiki Tradding",
      price: "1.490.000 đ",
    },
    {
      color: require("../assets/Rectangle_5.png"),
      image: require("../assets/vs_red.png"),
      name: "Điện Thoại Vsmart Joy 3 Hàng chính hãng",
      colorName: "Red",
      provider: "Tiki Tradding",
      price: "1.590.000 đ",
    },
    {
      color: require("../assets/Rectangle_6.png"),
      image: require("../assets/vs_black.png"),
      name: "Điện Thoại Vsmart Joy 3 Hàng chính hãng",
      colorName: "Black",
      provider: "Tiki Tradding",
      price: "1.690.000 đ",
    },
    {
      color: require("../assets/Rectangle_7.png"),
      image: require("../assets/vs_blue.png"),
      name: "Điện Thoại Vsmart Joy 3 Hàng chính hãng",
      colorName: "Blue",
      provider: "Tiki Tradding",
      price: "1.790.000 đ",
    },
  ];

  const navigation = useNavigation();
  const { selectedColor, selectedPrice,selectedColorName } = useContext(CreateContext);
  const { setSelectedColor, setSelectedPrice, setSelectedColoName} = useContext(CreateContext);

  const selectColor = (charType) => {
    setSelectedColor(charType.image);
    setSelectedPrice(charType.price);
    setSelectedColoName(charType.colorName);
  };

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
        }}
      >
        <View style={{ flex: 1, margin: 4 }}>
          <Image
            style={{
              height: 140,
              resizeMode: "contain",
            }}
            source={selectedColor || charTypes[0].image}
          />
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: "column",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{charTypes[0].name}</Text>
          <Text>
            Màu :{" "}
            <Text style={{ fontWeight: "bold" }}>
              {" "}
              {selectedColorName || charTypes[0].colorName}
            </Text>
          </Text>
          <Text>
            Cung cấp bởi{" "}
            <Text style={{ fontWeight: "bold" }}>
              {charTypes[0].provider}
            </Text>
          </Text>
          <Text style={{ color: "red" }}>{selectedPrice || charTypes[0].price}</Text>
        </View>
      </View>
      <Text
        style={{ marginHorizontal: 20, marginVertical: 20, fontWeight: "bold" }}
      >
        Chọn một màu bên dưới:
      </Text>
      {charTypes.map((charType, index) => (
        <Pressable
          style={{
            flex: 1,
          }}
          onPress={() => selectColor(charType)}
          key={index}
        >
          <Image
            style={{
              height: 80,
              resizeMode: "contain",
            }}
            source={charType.color}
          />
        </Pressable>
      ))}
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#4D6DC1",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            height: 50,
            marginTop: 20,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            XONG
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ColorScreen;
