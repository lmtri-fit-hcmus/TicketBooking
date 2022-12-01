import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FDFCF0',
    },
    datail_container: {
        flex: 0.3,
        
    },
    label_container: {
        flex: 0.1,
        backgroundColor:'#DAD6CC',
    },
    text_container: {
        flex: 0.08,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    list_food:{
    },

    ////////////////////////
    label_text:{
        marginLeft: 10,
        textAlignVertical: 'center',
        flex:1,
    },
    food_tag:{
        height: 50,
        flexDirection: 'row',
    },
    next_btn: {
        margin: 15,
        flex: 1,
        width: 300,
        borderRadius: 20,
        backgroundColor: '#AD2B33',
        alignSelf: 'center',

    },
    img_container:{
       
        flex: 0.3,
        marginHorizontal: 5,
        marginVertical: 15,
    },
    back:{
        marginLeft: 10,
        textAlignVertical: 'center',
        flex:1,
    },
  });
  

export default styles;