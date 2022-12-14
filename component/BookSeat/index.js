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
import styles from './style';
const seatPrice = [45000,60000,100000];

const Seat: () => Node = (props) =>{
  brdColor = props.brdColor
  bkgrColor = props.bkgrColor
  const [isPicked, setPicked] = useState(0);
  const onPress = () => {
    setPicked((isPicked == 0)?1:0);
    if(!isPicked){
      props._psh(seatPrice[props.isVip]);
      props._addSeat(0,props.name);
    }
    else{
      props._psh(-seatPrice[props.isVip]);
      props._addSeat(1,props.name);
    }
  }
  return(
    
    <View style = {[styles.seat_container]} >
      <TouchableOpacity
        style = {[styles.seat, { backgroundColor: (isPicked)?'red':bkgrColor, borderColor: brdColor }]}
        onPress = {onPress}
      >
        <Text style = {styles.text}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
}
const SeatRow: () => Node = (props) =>{
  return(
    <View style = {{ flexDirection: "row"}} >
        <Seat name = {props.char+1} isVip = {props.isVip} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor} _psh = {props.psh} _addSeat = {props.addSeat}/>
        <Seat name = {props.char+2} isVip = {props.isVip} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor}  _psh = {props.psh}_addSeat = {props.addSeat}/>
        <Seat name = {props.char+3} isVip = {props.isVip} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor}  _psh = {props.psh} _addSeat = {props.addSeat}/>
        <Seat name = {props.char+4} isVip = {props.isVip} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor} _psh = {props.psh} _addSeat = {props.addSeat}/>
        <Seat name = {props.char+5} isVip = {props.isVip} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor}  _psh = {props.psh} _addSeat = {props.addSeat}/>
        <Seat name = {props.char+6} isVip = {props.isVip} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor}  _psh = {props.psh} _addSeat = {props.addSeat}/>
        <Seat name = {props.char+7} isVip = {props.isVip} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor}  _psh = {props.psh} _addSeat = {props.addSeat}/>
        <Seat name = {props.char+8} isVip = {props.isVip} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor}  _psh = {props.psh} _addSeat = {props.addSeat}/>
        <Seat name = {props.char+9} isVip = {props.isVip} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor}  _psh = {props.psh} _addSeat = {props.addSeat}/>
        <Seat name = {props.char+10} isVip = {props.isVip} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor}  _psh = {props.psh} _addSeat = {props.addSeat}/>
        <Seat name = {props.char+11} isVip = {props.isVip}brdColor = {props.brdColor} bkgrColor = {props.bkgrColor}  _psh = {props.psh} _addSeat = {props.addSeat}/>
      </View>
  );
}
const Descrip: () => Node = (props) =>{
  return(
    <View style = {{ flexDirection: "row"}}>
      <View>
        <View style = {{ flexDirection: "row"}}>
          <View style = {{backgroundColor: 'red',height: 20,width: 20,margin: 5}}/>
          <Text > Checked </Text>
        </View>
        <View style = {{ flexDirection: "row"}}>
          <View style = {{backgroundColor: 'grey',height: 20,width: 20,margin: 5}}/>
          <Text> ???? ch???n </Text>
        </View>
        
      </View>
      <View>
        <View style = {{ flexDirection: "row"}}>
          <View style = {{borderColor: 'green',borderWidth: 1,height: 20,width: 20,margin: 5}}/>
          <Text> Th?????ng </Text>
        </View>
        <View style = {{ flexDirection: "row"}}>
          <View style = {{borderColor: 'red',borderWidth: 1,height: 20,width: 20,margin: 5}}/>
          <Text> Vip </Text>
        </View>
      </View>
      <View>
        <View style = {{ flexDirection: "row"}}>
          <View style = {{backgroundColor: 'pink',borderWidth: 1,height: 20,width: 20,margin: 5}}/>
          <Text> Sweetbox </Text>
        </View>
      </View>
    </View>
  );
}

const Footer: (props) => Node = (props) =>{
  const _ = () =>{
    let l = '';
    for(const i in props._listSeat){
      l+=props._listSeat[i];
      if(i!=(props._listSeat).length-1)
      l+=', ';
    }
    return l;
  }
  const list = _();
  return(
  <View style = {{flexDirection: 'row', flex: 1}}>
    <TouchableOpacity style = {styles.footer_click_btn}>
      <Text style = {{color: 'white',textAlign: "center", fontSize: 15}}>PREV</Text>
    </TouchableOpacity>

    <View style={{flexDirection:'column', flex: 0.6}}>
      <View style = {[styles.footer_text_box], {flex: 0.7, marginTop: 20, marginLeft: 10, borderBottomWidth:1}}>
        <Text>R???p: {props._prevProps[0]}</Text>
        <Text>Ph??ng Chi???u: {props._prevProps[1]}</Text>
        <Text>Xu???t Chi???u: {props._prevProps[2]}</Text>
        <Text>Gh???: {list}  </Text>
      </View>

      <View style = {[styles.footer_text_box], {flex: 0.3, margin: 10,}}>
        <Text>T???ng: {props._total} </Text>
      </View>
    </View>

    <TouchableOpacity style = {styles.footer_click_btn}>
      <Text style = {{color: 'white',textAlign: "center", fontSize: 15}}>NEXT</Text>
    </TouchableOpacity>
  </View>
  );
}

const BookSeat: () => Node = (props) => {
  const [total, pushTotal] = useState(0);
  const [selectedSeat, changeSelectedSeat] = useState([]);
  const handleChangeTotal = (n) => {
    pushTotal(total + n);
  }
  const handleAddSeat = (i,n) => {
    if(i==0)
      changeSelectedSeat([...selectedSeat, n])
    else{
      const list = selectedSeat.filter(i => i != n);
      changeSelectedSeat(list);
    }
  }

  return (
    <View style = {styles.container}>
      <Text style = {styles.screen}>SCREEN</Text> 
      <ScrollView  style = {{borderWidth: 1,flex: 1 }} horizontal = {true}>
        <ScrollView>
          <SeatRow char='A' isVip = {0} brdColor='green' psh={handleChangeTotal} addSeat={handleAddSeat}/>
          <SeatRow char='B' isVip = {0} brdColor='green' psh={handleChangeTotal} addSeat={handleAddSeat}/>
          <SeatRow char='C' isVip = {0} brdColor='green' psh={handleChangeTotal} addSeat={handleAddSeat}/>
          <SeatRow char='D' isVip = {0} brdColor='green' psh={handleChangeTotal} addSeat={handleAddSeat}/>
          <SeatRow char='E' isVip = {1} brdColor='red' psh={handleChangeTotal} addSeat={handleAddSeat}/>
          <SeatRow char='F' isVip = {1} brdColor='red' psh={handleChangeTotal} addSeat={handleAddSeat}/>
          <SeatRow char='G' isVip = {1} brdColor='red' psh={handleChangeTotal} addSeat={handleAddSeat}/>
          <SeatRow char='H' isVip = {1} brdColor='red' psh={handleChangeTotal} addSeat={handleAddSeat}/>
          <SeatRow char='J' isVip = {1} brdColor='red' psh={handleChangeTotal} addSeat={handleAddSeat}/>
          <SeatRow char='K' isVip = {1} brdColor='red' psh={handleChangeTotal} addSeat={handleAddSeat}/>
          <SeatRow char='L' isVip = {2} bkgrColor='pink' psh={handleChangeTotal} addSeat={handleAddSeat}/>
        </ScrollView>
      </ScrollView>
      <View style = {styles.description}>
        <Descrip/>
      </View>
      <View style = {styles.footer_container}>
        <Footer _total={total} _listSeat={selectedSeat} _prevProps = {[props.cinName,props.room, props.slot]}/>
      </View>
    </View>
  );
};

export default BookSeat;
