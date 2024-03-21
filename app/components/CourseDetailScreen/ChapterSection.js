import { View, Text } from "react-native";
import React from "react";
import colors from "../../utils/colors";
import { Ionicons } from "@expo/vector-icons";

export default function ChapterSection({ chapterList }) {
  return (
    chapterList && (
      <View
        style={{
          padding: 10,
          backgroundColor: colors.WHITE,
          borderRadius: 15,
          marginTop: 20,
          marginBottom: 50
        }}
      >
        <Text
          style={{ fontFamily: "outfit-medium", fontSize: 22, marginTop: 10 }}
        >
          Chapters
        </Text>
        {chapterList.map((item, idx) => (
          <View
            key={idx}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 10,
              backgroundColor: colors.WHITE,
              borderWidth: 1,
              borderRadius: 10,
              marginTop: 10,
              borderColor: colors.GRAY,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 27,
                  color: colors.GRAY,
                }}
              >
                {idx + 1}
              </Text>
              <Text
                style={{
                  fontFamily: "outfit-regular",
                  fontSize: 21,
                  color: colors.GRAY,
                }}
              >
                {item.title}
              </Text>
            </View>
            <Ionicons name="lock-closed" size={25} color={colors.GRAY} />
          </View>
        ))}
      </View>
    )
  );
}
