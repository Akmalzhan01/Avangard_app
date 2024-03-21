import { View, Text, Image } from "react-native";
import React from "react";
import colors from "../../utils/colors";
import { Ionicons } from "@expo/vector-icons";

export default function CourseItem({ item }) {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: colors.WHITE,
        marginRight: 15,
        borderRadius: 15,
      }}
    >
      <Image
        source={{ uri: item?.banner?.url }}
        style={{ width: 210, height: 120, borderRadius: 8 }}
      />
      <View style={{ padding: 7 }}>
        <Text style={{ fontFamily: "outfit-medium", fontSize: 17 }}>
          {item.name}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Ionicons name="book-outline" size={18} color="black" />
            <Text style={{ fontFamily: "outfit-regular" }}>
              {item?.chaptes?.length} Chapters
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Ionicons name="time-outline" size={18} color="black" />
            <Text style={{ fontFamily: "outfit-regular" }}>{item?.time}</Text>
          </View>
        </View>
        <Text
          style={{
            marginTop: 5,
            color: colors.PRIMARY,
            fontFamily: "outfit-medium",
          }}
        >
          {item?.price == "0" ? "Free" : `${item.price}$`}
        </Text>
      </View>
    </View>
  );
}
