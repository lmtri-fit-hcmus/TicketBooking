import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FDFCF0',
    },
   
    list_food:{
        flex: 0.7,
        backgroundColor:'pink',
        backgroundColor: '#FDFCF0',
    },
    footer:{
        flex: 0.3,
    },

    //////////////////////////////////
    food_container: {
        backgroundColor: '#222222',
        flexDirection: 'row',
        height: 100,
        borderColor: 'white',
        borderWidth: 1,
        flex:1 ,
    },
    food_img_container: {
        backgroundColor:'red',
        width: 100,
        margin: 10,
    },
    food_img: {
        height: 80
    },
    food_textbox: {
        flexDirection: 'column',
        margin: 10,
        //backgroundColor:'blue',
        flex: 1,
    },
    food_textbox_header:{
        color: 'white',
        fontSize: 15,
    },
    food_textbox_body: {
        color: 'white',
        fontSize: 10,
    },
    click_box: {
        height:20,
        width: 40,
        backgroundColor: 'white',
        marginLeft:1,
        borderRadius:10
    },
    ////////////////////////////////
    footer_text_box:{
        marginLeft: 5,
        flex: 2,
        //justifyContent: 'center',
    },
    footer_click_btn: {
        marginLeft: 2,
        marginRight: 2,
        marginVertical: 65,
        borderRadius: 20,
        flex: 0.3,
        justifyContent: 'center',
        backgroundColor: '#343433',
    },

});

export default styles;
