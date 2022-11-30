import React, { useState }  from 'react';
import type {Node} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

import styles from './style'

const Food: () => Node =  () =>{
  const [num, increaseNum] = useState(0);
  const handleIncreaseNum = (n)=>{
    if(!(n==-1&&num==0))
      increaseNum(num+n);   
  }
  const Incs = () => {
    handleIncreaseNum(1);
  }
  const Decs = () => {
    handleIncreaseNum(-1);
  }
  return(
    <View style = {styles.food_container}>
      <View style = {{flexDirection: 'column'}}>
        <Text style = {styles.food_textbox_header}>
          BLACK PANTHER COMBO - 299.00 đ
        </Text>
        <Text style = {styles.food_textbox_body}>
          - BLACK PANTHER COMBO - 299.00 đ
        </Text>
        <View style ={{flexDirection: 'row', justifyContent:'flex-end'}}>
          <View style={styles.click_box}>
            <Text  style={{textAlign:'center', fontSize: 15}}>{num}</Text>
          </View>
          <TouchableOpacity style = {styles.click_box} onPress={Decs}>
            <Text style={{textAlign:'center', fontSize: 20}}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.click_box} onPress={Incs}>
            <Text style ={{textAlign:'center', fontSize: 20}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const BookFood: () => Node = () => {
  return (
  <View style={styles.container}>
      <ScrollView style={styles.list_food}>
        <Food/>
        <Food/>
        <Food/>
        <Food/>
        <Food/>
        <Food/>
        <Food/>
        <Food/>
      </ScrollView>
      <View style={styles.footer}>

      </View>
  </View>
  );
};
  

export default BookFood;