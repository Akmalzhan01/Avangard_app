import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import colors from "../../utils/colors";
import OptionItem from "./OptionItem";

export default function DetailSection({ course, enrollCourse }) {

  return (
    <View
      style={{ padding: 10, borderRadius: 15, backgroundColor: colors.WHITE }}
    >
      <Image
        source={{ uri: course?.banner?.url }}
        style={{
          width: Dimensions.get("screen").width * 0.85,
          height: 190,
          borderRadius: 15,
        }}
      />
      <View>
        <View style={{ padding: 10 }}>
          <Text
            style={{ fontSize: 22, fontFamily: "outfit-medium", marginTop: 10 }}
          >
            {course?.name}
          </Text>
          <View style={styles.rowStyle}>
            <OptionItem
              icon={"book-outline"}
              value={course?.chapters?.length + "Chapter"}
            />
            <OptionItem icon={"time-outline"} value={course.time} />
          </View>
          <View style={styles.rowStyle}>
            <OptionItem icon={"person-circle-outline"} value={course?.author} />
            <OptionItem icon={"cellular-outline"} value={course.level} />
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
            Description
          </Text>
          <Text
            style={{
              fontFamily: "outfit-regular",
              lineHeight: 23,
              color: colors.GRAY,
            }}
          >
            {course?.description?.markdown}
          </Text>
        </View>
        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", gap:7,}}>
          <TouchableOpacity
          onPress={() => enrollCourse()}
            style={{
              padding: 10,
              backgroundColor: colors.PRIMARY,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-regular",
                color: colors.WHITE,
                textAlign: "center",
                fontSize: 17,
              }}
            >
              Enroll for free
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: colors.SECONDARY,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-regular",
                color: colors.WHITE,
                textAlign: "center",
                fontSize: 17,
              }}
            >
              Membership $2.99/Month
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowStyle: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 10,
  },
});
