import { View } from 'react-native'
import React from 'react'
import Header from '../components/Homescreen/Header'
import colors from '../utils/colors'
import CourseList from '../components/Homescreen/CourseList'

export default function HomeScreen() {
  return (
    <View>
      <View style={{backgroundColor: colors.PRIMARY, height:250, paddingHorizontal:20, paddingVertical: 30}}>
      <Header />
      </View>
      <View style={{padding:20}}>
        <View style={{marginTop: -90}}>
        <CourseList level={"Basic"} />
        </View>
        <CourseList level={"Advance"} />
      </View>
    </View>
  )
}