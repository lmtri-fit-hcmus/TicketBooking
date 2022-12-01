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
const FoodTag: () => Node = (props) => {
    
    return(
        <View style={styles.food_tag}>
            <Text style={styles.label_text}> {props.text }</Text>
            <Text style={{marginLeft: 10, textAlignVertical: 'center',}}> {props.nums} </Text>
        </View>
    );
}

const Detail: () => Node = (props) =>{
    console.log(props)
    return(
        <View style={{flexDirection: 'row',}}>
            <View style={styles.img_container}>
                <Image
                style={styles.img}
                source={require('./temp.jpg')}
                />
            </View> 
            <View style={{margin: 5, flex:0.7}}>
                <Text style={{fontWeight: 'bold',}}>{props.filmName}</Text>
                <Text >{props.time}</Text>
                <Text>{props.cinName}</Text>
                <Text>{'Cinema ' + props.room}</Text>
                <Text>{'Seats: ' + props.listSeat}</Text>
                <Text style={{color:'#AD2B33', fontWeight: 'bold'}}>{ 'Total Payment: ' + props.totalFoodPrice +props.totalSeatPrice}</Text>
            </View>
        </View>
    );
}

const Basket: () => Node = (props) => {
    return(
        <View style = {styles.container}>
            <TouchableOpacity style={styles.label_container}>
                <Text style = {styles.back}>
                    BACK
                </Text>
            </TouchableOpacity>
    
            <View style={styles.datail_container}>
                <Detail filmName={props.filmName} time={props.time} cinName={props.cinName} room={props.room}
                 slot={props.slot} listSeat={props.listSeat} totalSeatPrice={props.totalSeatPrice} totalFoodPrice={props.totalFoodPrice}/>
            </View>
            <View style={styles.label_container}>
                <Text style = {styles.label_text}>
                    TICKET INFORMATION
                </Text>
            </View>
            <View style={styles.text_container}>
                <Text style={styles.label_text}> Quantity</Text>
                <Text style={{marginLeft: 10, textAlignVertical: 'center',}}> {props.listSeat.length} </Text>
            </View>
            <View style={styles.text_container}>
                <Text style={styles.label_text}> Sub Total</Text>
                <Text style={{marginLeft: 10, textAlignVertical: 'center',}}> {props.totalSeatPrice} </Text>
            </View>
            <View style={styles.label_container}>
                <Text style = {styles.label_text}>
                    CONCESSION INFORMATION
                </Text>
            </View>
            <View style={{flex:0.4}}>
                <ScrollView style={[styles.list_food]}>
                {
                    props.listPickedFood.map((item,index)=>{
                        return <FoodTag text={item.text} nums = {item.nums}/>
                    }
                    )
                }
                </ScrollView>
            </View>
            <View style={styles.text_container}>
                <Text style={styles.label_text}> Sub Total</Text>
                <Text style={{marginLeft: 10, textAlignVertical: 'center',}}> {props.totalFoodPrice} </Text>
            </View>
            <View style={{flex: 0.2, borderTopWidth: 1.5}}>
                <Text style={{margin:5}}>I agree to the Term of Use and am purchasing tickets for age appropriate audience.</Text>
                <TouchableOpacity style={styles.next_btn}> 
                    <Text style={{flex: 1, textAlign: 'center',textAlignVertical: 'center',color: 'white',}}>I AGREE AND CONTINUE</Text>
                </TouchableOpacity>
            </View>
    
            
        </View>

    );
}

export default Basket;