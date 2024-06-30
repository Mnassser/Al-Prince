import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Slider from '../Components/Slider'
import Reviews from '../Components/Reviews'


const Home = () => {
    
  return (
    <View className='flex-1 items-center justify-center bg-[#363636]'>
        <ScrollView>
           <Slider/>
           <Reviews/>
        </ScrollView>

    </View>
  )
}

export default Home