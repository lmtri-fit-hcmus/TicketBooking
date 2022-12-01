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

const listFoodName = ['SINGLE BT21 COMBO','SNOOPY SINGLE COMBO','SNOOPY DOUBLE COMBO', 'SNOOPY TRIPLE COMBO', 'MY COMBO', 'CGV COMBPO'];
const listFoodPrice = [309000,239000,409000,599000,83000,102000];
const listFoodImg = [require('../../src/food/1.jpg'), require('../../src/food/2.jpg'),require('../../src/food/3.jpg'),require('../../src/food/4.jpg'),
                    require('../../src/food/5.jpg'),require('../../src/food/6.jpg')];
const listFoodDescript = [
  '1 ly BT21 Back To School 32Oz + 1 nước siêu lớn + 1 bắp 44Oz (tùy chọn vị)',
  '1 ly Snoopy 32Oz (Kèm nước) + 1 bắp ngọt lớn (tùy chọn vị)',
  '2 ly Snoopy 32Oz (Kèm nước) + 1 bắp ngọt lớn (tùy chọn vị)',
  '3 ly Snoopy 32Oz (Kèm nước) + 1 bắp ngọt lớn (tùy chọn vị)',
  '1 bắp lớn + 1 nước siêu lớn. Nhận trong ngày xem phim',
  '2 bắp lớn + 1 nước siêu lớn. Nhận trong ngày xem phim'
]
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
    if(!(n==-1&&num==0) ){
      props.addFood(listFoodName[id], num+n, listFoodPrice[id]);
      increaseNum(num+n);
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
            {listFoodName[id] +  ' - ' + listFoodPrice[id] + '.VND'}
          </Text>
          <Text style = {styles.food_textbox_body}>
            {listFoodDescript[id]}
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
      <Text> {'x' +props.num }</Text>
    </View>
  );
}
const Footer: () => Node = (props) =>{
  let list = props.list
  const countTotal = (list) =>{
    let res = 0;
    list.forEach(element => {
      if(element.nums!=0){
        res = res + element.nums*element.price;
      }
    })
    return res;
  }
  return(
  <View style = {{flexDirection: 'row', flex: 1}}>
    <TouchableOpacity style = {styles.footer_click_btn}>
      <Text style = {{color: 'white',textAlign: "center", fontSize: 15}}>PREV</Text>
    </TouchableOpacity>
  
    <View style={{flex: 0.6, margin: 10}}>
      <ScrollView style = {styles.footer_text_box}>
        
          {   
            list.map((item, index)=>{
              if(item.nums!=0){
                return <FoodText text={item.text} num = {item.nums}/>
              }
          })
          }
        
      </ScrollView>
      <View style={{flex: 0.2, margin: 5}}>
          <Text >Tổng: {countTotal(list)}</Text>
      </View>
    </View>

    <TouchableOpacity style = {styles.footer_click_btn}>
      <Text style = {{color: 'white',textAlign: "center", fontSize: 15}}>NEXT</Text>
    </TouchableOpacity>
  </View>
  );
}

const BookFood: () => Node = () => {
  const [listPick, addListPick] = useState(listPicked);
 // console.log(listPick);
  const handleAddFoodDetail = (name, num, price)=>{
    const l = listPick.filter(element => element.text!=name);
    console.log(l);
    addListPick([...l, {text: name, nums: num, price: price}])
  };
  return (
  <View style={styles.container}>
      <ScrollView style={styles.list_food}>
         {
         listPicked.map((item, index)=>{
          return <Food id = {index} addFood = {handleAddFoodDetail}/>
         })
          }
      </ScrollView>
      <View style={styles.footer}>
        <Footer list = {listPick}/>
      </View>
  </View>
  );
};
  

export default BookFood;