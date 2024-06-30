import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Review = ({params}) => {
  return (
    <TouchableOpacity className='h-fit ml-1 rounded-lg flex justify-center items-center'>
        <Image source={{uri:params.image}} className='w-[300px] h-[400px] rounded-[10px] mr-2'/>
      <Text className='absolute text-2xl top-1/2 translate-x-1/2 translate-y-1/2 text-black bg-white rounded-[10px] p-2 opacity-[0.9]'>{params.name}</Text>
    </TouchableOpacity>
  )
}

export default Review