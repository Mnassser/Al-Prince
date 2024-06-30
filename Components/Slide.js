import {TouchableOpacity ,Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const Slide = ({params}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity className="rounded-xl flex-1 items-center justify-center w-[300px] h-[200px] ml-[4px] " style={{backgroundColor:`${params.color}`}} onPress={() => navigation.navigate('Order')}>
            <Text className='text-white'>{params.name}</Text>
      </TouchableOpacity>
  )
}

export default Slide