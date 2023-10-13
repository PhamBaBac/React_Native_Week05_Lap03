import React, { useContext } from "react";
import { Image, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CreateContext } from "./CreateContext";

const CarScreen = () => {
  const stars = [1, 2, 3, 4, 5];

  const navigation = useNavigation();
  const handleColorScreen = () => {
    navigation.navigate("ColorScreen");
  };

  const { selectedColor, selectedPrice } = useContext(CreateContext);
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ margin: 20 }}>
        <Image
          style={{ height: 300, resizeMode: "contain", marginTop: 20 }}
          source={selectedColor || require("../assets/vs_silver.png")}
        />
        <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 20 }}>
          Dien thoai Vsmart Joy 3
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-between",
          }}
        >
          {stars.map((star) => (
            <Image
              key={star}
              style={{ width: 20, height: 20 }}
              source={require("../assets/star.png")}
            />
          ))}
          <Text style={{ marginLeft: 80 }}>(Xem 828 đánh giá)</Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <Text style={{ color: "red", fontSize: 16 }}>{selectedPrice}</Text>
          <Text
            style={{
              color: "gray",
              marginLeft: 20,
              textDecorationLine: "line-through",
            }}
          >
            1.990.000 đ
          </Text>
        </View>
        <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "bold" }}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <View
          style={{
            borderColor: "#00000",
            borderWidth: 1,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            marginTop: 20,
          }}
        >
          <Pressable onPress={handleColorScreen}>
            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 20 }}>
              4 MÀU-CHỌN MÀU
            </Text>
          </Pressable>
        </View>
        <Pressable
          style={{
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            height: 50,
            marginTop: 20,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>CHỌN MUA</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CarScreen;
