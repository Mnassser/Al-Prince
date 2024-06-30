import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Review from './Review'

const Reviews = () => {
  return (
    <View>
        <Text className='text-white text-lg'>بعض اعمالنا</Text>
    <ScrollView horizontal className='my-1'>
      <Review params={{id:1,name:'صيانة سيارة',image:'https://car-user.com/wp-content/uploads/2021/08/%D9%85%D8%B1%D9%83%D8%B2-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA-%D9%81%D9%89-%D8%A7%D9%84%D9%85%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D9%86-600x391.jpg',date:'2024'}}/>
      <Review params={{id:2,name:'حفلة شواء',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Barbecued_meats.jpg/1280px-Barbecued_meats.jpg',date:'2024'}}/>
      <Review params={{id:3,name:'حراسة منزل',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1F_HczIqRqWyzVhlK28Cjsr2mNdcEzr3d1w&s',date:'2024'}}/>
      <Review params={{id:4,name:'تنظيم حفلة',image:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_nhRm28_w9PSG88i-dJiPnbT99cKEEHZMv4v2NDRj-YYYUvN6ZlMr5aNTcQ5gw0YVzoftM5CY-ASVfxl9DmxnlXPhl7RUZaUUXjierz-aRTl5LTmFK9f31tN-TGjhoNK18VhSC4RLtq-p/s1600/preview_mnagtbhkvhwrtxwtqcofuvqzo.jpg',date:'2024'}}/>
      <Review params={{id:4,name:'تخليص ورقي',image:'https://elmo7amy.tv/wp-content/uploads/2023/03/%D8%A7%D8%B3%D8%AA%D8%AE%D8%B1%D8%A7%D8%AC-%D8%A7%D9%84%D9%82%D9%8A%D8%AF-%D8%A7%D9%84%D8%B9%D8%A7%D8%A6%D9%84%D9%8A.jpg',date:'2024'}}/>
      <Review params={{id:4,name:'تخليص جمركي',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_uANqXhK7s9it7YgtHy6c-cCEeUudjjkJBA&s',date:'2024'}}/>
      <Review params={{id:4,name:'استخراج اوراق رسمية',image:'https://th.elbadil.com/wp-content/uploads/2023/10/%D8%AE%D8%B7%D9%88%D8%A7%D8%AA-%D8%A7%D8%B3%D8%AA%D8%AE%D8%B1%D8%A7%D8%AC-%D8%B4%D9%87%D8%A7%D8%AF%D8%A9-%D9%85%D9%8A%D9%84%D8%A7%D8%AF-%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A7.jpg.webp',date:'2024'}}/>
    </ScrollView>
    </View>
  )
}

export default Reviews