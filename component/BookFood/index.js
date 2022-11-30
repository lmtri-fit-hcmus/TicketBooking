import React, { useState }  from 'react';
import type {Node} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles from './style'

//GLOBAL VARIABLES

const listFoodName = ['BAP RANG','PEPSI'];
const listFoodPrice = [45000,50000];
const listFoodImg = [require('../../src/temp_food.jpg'), require('../../src/temp_food1.jpg')];
const listPickedFunc = (list,list1) => {
  const res = [];
  for(const i in list){
    res.push({text: list[i], nums: 0, price: list1[i]});
  }
  return res;
}
const listPicked = listPickedFunc(listFoodName,listFoodPrice);

//DEFINE FUNC
const Food: () => Node =  (props) =>{
  const id = props.id;
  const [num, increaseNum] = useState(0);
  const handleIncreaseNum = (n)=>{
    if(!(n==-1&&num==0)){
      increaseNum(num+n);
      props.addFood(listFoodName[id], num);
    }
    
      
  }
  const Incs = () => {
    handleIncreaseNum(1);
  }
  const Decs = () => {
    handleIncreaseNum(-1);
  }
  
  return(
    <View style = {styles.food_container}>
      <View style = {styles.food_img_container}>
        <Image
          style={styles.food_img}
          source={listFoodImg[id]}
        />
      </View>
      <View style = {styles.food_textbox}>
        <View style={{ flex: 1}}>
          <Text style = {styles.food_textbox_header}>
            {listFoodName[id]}
          </Text>
          <Text style = {styles.food_textbox_body}>
            {listFoodPrice[id]}
          </Text>
        </View>
        <View style ={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <TouchableOpacity style = {styles.click_box} onPress={Decs}>
            <Text style={{textAlign:'center', fontSize: 15}}>-</Text>
          </TouchableOpacity>
          <View style={styles.click_box}>
            <Text  style={{textAlign:'center', fontSize: 15}}>{num}</Text>
          </View>
          <TouchableOpacity style = {styles.click_box} onPress={Incs}>
            <Text style ={{textAlign:'center', fontSize: 15}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const FoodText: () => Node = (props) =>{
  
  return(
    <View style={{flexDirection:'row'}}>
      <Text> {props.text + ':'} </Text>
      <Text> {'x' +props.nums }</Text>
    </View>
  );
}
const Footer: () => Node = (props) =>{
  const list = props.list;
  return(
  <View style = {{flexDirection: 'row', flex: 1}}>
    <TouchableOpacity style = {styles.footer_click_btn}>
      <Text style = {{color: 'white',textAlign: "center", fontSize: 15}}>PREV</Text>
    </TouchableOpacity>
  

    <ScrollView style = {styles.footer_text_box}>
    {   
      list.map((item, index)=>{
        if(item.nums!=0){
          return <FoodText text={item.text} num = {item.nums}/>
        }
    })
    }
    </ScrollView>

    <TouchableOpacity style = {styles.footer_click_btn}>
      <Text style = {{color: 'white',textAlign: "center", fontSize: 15}}>NEXT</Text>
    </TouchableOpacity>
  </View>
  );
}

const BookFood: () => Node = () => {
  const [listPick, addListPick] = useState(listPicked);
  const handleAddFoodDetail = (name, num)=>{
    if(num!=0){
      const l = listPick;
      console.log(l);
      l.forEach(element => { 
        if(element.text == name){
          element.nums++;
        }
        addListPick(l);
      });
    }
  };
  return (
  <View style={styles.container}>
      <ScrollView style={styles.list_food}>
        <Food id = '1' addFood = {handleAddFoodDetail}/>
        <Food id = '1' addFood = {handleAddFoodDetail}/>
        <Food id = '0' addFood = {handleAddFoodDetail}/>
        <Food id = '1' addFood = {handleAddFoodDetail}/>
        <Food id = '1' addFood = {handleAddFoodDetail}/>
        <Food id = '0' addFood = {handleAddFoodDetail}/>
        <Food id = '1' addFood = {handleAddFoodDetail}/>
        <Food id = '0' addFood = {handleAddFoodDetail}/>
      </ScrollView>
      <View style={styles.footer}>
        <Footer list = {listPick}/>
      </View>
  </View>
  );
};
  

export default BookFood;