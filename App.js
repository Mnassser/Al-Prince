import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Order from './Screens/Order';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      
      <NavigationContainer>
        <View className='flex bg-[#757575] w-full h-[25px] pt-[20px] pb-[50px]'>
            <Text className='text-[#ff0] text-xl h-[40px] mt-2 ml-3'>
                Al-Prince
            </Text>
            
          </View>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Order" component={Order} options={{headerShown:false}} />
      </Stack.Navigator>
    <StatusBar style='light'/>
    </NavigationContainer>
    
  );
}
