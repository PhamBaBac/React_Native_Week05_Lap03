import React, { useContext, useState } from "react";
import {
  Image,
  View,
  Text,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CreateContext } from "./CreateContext";

const CartScreen = () => {
  const stars = [1, 2, 3, 4, 5];
  const charTypes = [
    {
      color: require("../assets/Rectangle_4.png"),
      image: require("../assets/vs_silver.png"),
      name: "Điện Thoại Vsmart Joy 3 Hàng chính hãng",
    },
  ];
  const reviews = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      text: "Sản phẩm tốt, nhận được hàng nhanh chóng",
      rating: 3,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Nguyễn Văn B",
      text: "Sản phẩm tốt, nhận được hàng nhanh chóng",
      rating: 5,
      image: "https://picsum.photos/200/300",
    },
  ];
  const [showReviews, setShowReviews] = useState(false);
  const { selectedColor, selectedPrice } = useContext(CreateContext);

  const navigation = useNavigation();

  const handleColorScreen = () => {
    navigation.navigate("ColorScreen");
  };
  const renderStars = (rating) => {
    return "★".repeat(rating);
  };
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ marginHorizontal: 20 }}>
          <Image
            style={{ height: 300, resizeMode: "contain", marginTop: 20 }}
            source={selectedColor || charTypes[0].image}
          />
          <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 20 }}>
            {charTypes[0].name}
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
            <Pressable onPress={() => setShowReviews(!showReviews)}>
              <Text style={{ marginLeft: 80 }}>(Xem 828 đánh giá)</Text>
            </Pressable>
          </View>
          {!showReviews && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "red", fontSize: 16 }}>
                {selectedPrice}
              </Text>
              <Text
                style={{
                  color: "gray",
                  marginLeft: 20,
                  textDecorationLine: "line-through",
                }}
              >
                1.990.000 đ
              </Text>
              )
            </View>
          )}

          {/* Hiển thị đánh giá */}
          {showReviews && (
            <FlatList
              data={reviews}
              renderItem={({ item }) => (
                <View style={{ marginVertical: 10 }}>
                  <Text style={{ fontWeight: "bold", marginTop: 10 }}>
                    {item.name}
                  </Text>
                  <Text style={{ marginTop: 10 }}>{item.text}</Text>
                  <Image
                    style={{ width: 100, height: 100, marginTop: 10 }}
                    source={{ uri: item.image }}
                  />
                  <Text style={{ color: "#f1c40f", marginTop: 10 }}>
                    {renderStars(item.rating)}
                  </Text>
                </View>
              )}
            />
          )}
          {!showReviews && (
            <View>
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
                  <Text
                    style={{ color: "#000", fontWeight: "bold", fontSize: 20 }}
                  >
                    4 MÀU-CHỌN MÀU
                  </Text>
                </Pressable>
              </View>
            </View>
          )}

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
    </ScrollView>
  );
};

export default CartScreen;
