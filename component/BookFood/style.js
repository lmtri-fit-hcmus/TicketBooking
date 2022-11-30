import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    list_food:{
        flex: 0.7,
        backgroundColor:'pink',
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
        height:30,
        width: 50,
        backgroundColor: 'white',
        marginLeft:5,
        borderRadius:10
    },
});

export default styles;