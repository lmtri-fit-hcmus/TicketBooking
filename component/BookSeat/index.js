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


const Seat: () => Node = (props) =>{
  brdColor = props.brdColor
  bkgrColor = props.bkgrColor
  const [isPicked, setPicked] = useState(0);
  const onPress = () => {
    setPicked((isPicked == 0)?1:0);
    if(!isPicked){
      props._psh(45);
      props._addSeat(0,props.name);
    }
    else{
      props._psh(-45);
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
        <Seat name = {props.char+1} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor} _psh = {props.psh} _addSeat = {props.addSeat}/>
        <Seat name = {props.char+2} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor}  _psh = {props.psh}_addSeat = {props.addSeat}/>
        <Seat name = {props.char+3} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor}  _psh = {props.psh} _addSeat = {props.addSeat}/>
        <Seat name = {props.char+4} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor} _psh = {props.psh} _addSeat = {props.addSeat}/>
        <Seat name = {props.char+5} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor}  _psh = {props.psh} _addSeat = {props.addSeat}/>
        <Seat name = {props.char+6} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor}  _psh = {props.psh} _addSeat = {props.addSeat}/>
        <Seat name = {props.char+7} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor}  _psh = {props.psh} _addSeat = {props.addSeat}/>
        <Seat name = {props.char+8} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor}  _psh = {props.psh} _addSeat = {props.addSeat}/>
        <Seat name = {props.char+9} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor}  _psh = {props.psh} _addSeat = {props.addSeat}/>
        <Seat name = {props.char+10} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor}  _psh = {props.psh} _addSeat = {props.addSeat}/>
        <Seat name = {props.char+11} brdColor = {props.brdColor} bkgrColor = {props.bkgrColor}  _psh = {props.psh} _addSeat = {props.addSeat}/>
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
          <Text> Đã chọn </Text>
        </View>
        
      </View>
      <View>
        <View style = {{ flexDirection: "row"}}>
          <View style = {{borderColor: 'green',borderWidth: 1,height: 20,width: 20,margin: 5}}/>
          <Text> Thường </Text>
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
  return(
  <View style = {{flexDirection: 'row', flex: 1}}>
    <TouchableOpacity style = {footer.click_btn}>
      <Text style = {{color: 'white',textAlign: "center", fontSize: 15}}>PREV</Text>
    </TouchableOpacity>

    <View></View>

    <View style = {footer.text_box}>
      <Text>Rạp: </Text>
      <Text>Phòng Chiếu: </Text>
      <Text>Xuất Chiếu: </Text>
      <Text>Ghế: {props._listSeat}  </Text>
    </View>

    <View style = {footer.text_box}>
      <Text>Tổng: {props._total} </Text>
    </View>

    <TouchableOpacity style = {footer.click_btn}>
      <Text style = {{color: 'white',textAlign: "center", fontSize: 15}}>NEXT</Text>
    </TouchableOpacity>
  </View>
  );
}

const BookSeat: () => Node = () => {
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
          <SeatRow char='A' brdColor='green' psh={handleChangeTotal} addSeat={handleAddSeat}/>
          <SeatRow char='B' brdColor='green' psh={handleChangeTotal} addSeat={handleAddSeat}/>
          <SeatRow char='C' brdColor='green' psh={handleChangeTotal} addSeat={handleAddSeat}/>
          <SeatRow char='D' brdColor='green' psh={handleChangeTotal} addSeat={handleAddSeat}/>
          <SeatRow char='E' brdColor='red' psh={handleChangeTotal} addSeat={handleAddSeat}/>
          <SeatRow char='F' brdColor='red' psh={handleChangeTotal} addSeat={handleAddSeat}/>
          <SeatRow char='G' brdColor='red' psh={handleChangeTotal} addSeat={handleAddSeat}/>
          <SeatRow char='H' brdColor='red' psh={handleChangeTotal} addSeat={handleAddSeat}/>
          <SeatRow char='J' brdColor='red' psh={handleChangeTotal} addSeat={handleAddSeat}/>
          <SeatRow char='K' brdColor='red' psh={handleChangeTotal} addSeat={handleAddSeat}/>
          <SeatRow char='L' bkgrColor='pink' psh={handleChangeTotal} addSeat={handleAddSeat}/>
        </ScrollView>
      </ScrollView>
      <View style = {styles.description}>
        <Descrip/>
      </View>
      <View style = {footer.container}>
        <Footer _total={total} _listSeat={selectedSeat}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFCF0',
  },
  screen: {
    textAlign: 'center',
    margin: 20,
  },
  seat_container: {
    border: 2,
    height: 35,
    width: 35,
    margin: 2,
  },
  text: {
    textAlign: 'center'
  },
  seat: {
    borderWidth: 2,
    flex: 1
  },
  description:{
    justifyContent: 'center',
    flex: 0.2,
    marginTop: 20,
    flexDirection: "row",
   
  },

});

const footer = StyleSheet.create({
  container: {
    borderWidth: 1,
    flex: 0.5,
  },
  click_btn: {
    marginLeft: 2,
    marginRight: 2,
    marginVertical: 65,
    borderRadius: 20,
    flex: 1.5,
    justifyContent: 'center',
    backgroundColor: '#343433',
  },
  text_box: {
    marginLeft: 5,
    flex: 2,
    justifyContent: 'center',
  },
})
export default BookSeat;
