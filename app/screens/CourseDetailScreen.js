import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import DetailSection from "../components/CourseDetailScreen/DetailSection";
import colors from "../utils/colors";
import ChapterSection from "../components/CourseDetailScreen/ChapterSection";
import { enrollCourse } from "../services";
import { useUser } from "@clerk/clerk-expo";

export default function CourseDetailScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { user } = useUser();
  useEffect(() => {
    console.log("---", params.course.id);
  }, [params.course]);


  const UserEnrollCourse = () => {
    enrollCourse(params.course.id, user.primaryEmailAddress.emailAddress)
      .then((res) => console.log("--", res))
      .catch((err) => console.log(err));
  };

  return (
    params.course && (
      <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 40 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={40} color={colors.GRAY} />
        </TouchableOpacity>
        <DetailSection
          course={params.course}
          enrollCourse={() => UserEnrollCourse()}
        />
        <ChapterSection chapterList={params.course.chapters} />
      </ScrollView>
    )
  );
}
