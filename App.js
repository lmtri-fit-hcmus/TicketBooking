//import * from 'react';
import BookSeat from './component/BookSeat/index';
import BookFood from './component/BookFood/index';
import Basket from './component/Basket/index'

const App: () => Node = () =>{
    return(
        //<BookSeat cinName = 'CGV Hung Vuong' room = 'C12' slot = '12'/>
        <Basket filmName='ONE PIECE' cinName = 'CGV Hung Vuong' room = 'C12' slot = '12' time='17:30 - 19:25'
                listSeat ={['A1','A2','A3']} totalSeatPrice = {300} listPickedFood={[{text: 'Food1', price: 400, nums: 2}]} totalFoodPrice={50000}/>
     
    );
}

export default App;