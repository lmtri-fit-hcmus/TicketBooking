import {StyleSheet} from 'react-native'

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
    footer_container: {
        borderWidth: 1,
        flex: 0.5,
      },
      footer_click_btn: {
        marginLeft: 2,
        marginRight: 2,
        marginVertical: 65,
        borderRadius: 20,
        flex: 0.2,
        justifyContent: 'center',
        backgroundColor: '#343433',
      },
      footer_text_box: {
        
        justifyContent: 'center',
      },
  });
  

export default styles;