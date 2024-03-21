import { View, Image, Text, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import colors from "../../utils/colors";
import Coin from "../../../assets/images/Coin.png";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    isLoaded && (
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: user?.imageUrl }}
              style={{ width: 50, height: 50, borderRadius: 99 }}
            />
            <View>
              <Text
                style={{ color: colors.WHITE, fontFamily: "outfit-regular" }}
              >
                Welcome,
              </Text>
              <Text
                style={{
                  color: colors.WHITE,
                  fontFamily: "outfit-medium",
                  fontSize: 18,
                }}
              >
                {user?.fullName}
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Image source={Coin} style={{ width: 35, height: 35 }} />
            <Text style={{ color: colors.WHITE, fontSize: 20 }}>3580</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.WHITE,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 5,
            borderRadius: 99,
            marginTop: 25
          }}
        >
          <TextInput
            placeholder="Search Courses"
            style={{ fontFamily: "outfit-regular", fontSize: 18 }}
          />
          <Ionicons name="search-circle" size={50} color={colors.PRIMARY} />
        </View>
      </View>
    )
  );
}
