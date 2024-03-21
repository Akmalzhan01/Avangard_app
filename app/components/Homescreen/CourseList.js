import { View, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { getCourseList } from "../../services";
import SubHeading from "../SubHeading";
import colors from "../../utils/colors";
import CourseItem from "./CourseItem";
import { useNavigation } from "@react-navigation/native";

export default function CourseList({ level }) {
  const [courseList, setCourseList] = useState([]);
  const navigation = useNavigation();

  const getCourses = () => {
    getCourseList(level).then((res) => {
      // console.log("RES--", res);
      setCourseList(res?.courses);
    });
  };
  useEffect(() => {
    getCourses();
  }, []);

  return (
    <View>
      <SubHeading
        text={`${level} Courses`}
        color={level == "Basic" && colors.WHITE}
      />
      <FlatList
        data={courseList}
        key={courseList.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("course-detail", {
              course: item
            })}
          >
            <CourseItem item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
