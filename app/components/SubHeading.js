import { View, Text } from 'react-native'
import React from 'react'
import colors from '../utils/colors'

export default function SubHeading({text, color=colors.BLACK}) {
  return (
    <View>
      <Text style={{
      fontFamily: "outfit-bold",
      fontSize: 24,
      color: color
    }}>{text}</Text>
    </View>
  )
}