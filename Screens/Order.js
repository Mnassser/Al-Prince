import {View, ScrollView, Text, Button } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native';
const Order = () => {
  return (
    <View className='flex-1 items-center justify-center bg-[#363636]'>
        <Text className="my-3 text-xl text-white">اكتب طلبك</Text>
        <ScrollView>
                <TextInput
                    className='w-[300px] rounded-sm bg-white p-3 my-1'
                    placeholder="الاسم بالكامل"
                />
                <TextInput
                    className='w-[300px] rounded-sm bg-white p-3 my-1'
                    placeholder="العنوان"
                />

                <TextInput
                    className='w-[300px] rounded-sm bg-white p-3 my-1'
                    placeholder="رقم الهاتف"
                />
                <TextInput
                    className='w-[300px] h-[300px] rounded-sm bg-white p-3 my-1'
                    placeholder="الطلب"
                />
                <Button title='ارسال' onPress={()=>{

                }}/>
                    
                
        </ScrollView>

    </View>
  )
}

export default Order