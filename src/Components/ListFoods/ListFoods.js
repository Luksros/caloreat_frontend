import React, {useState, useEffect} from 'react';
import _axios from '../Axios/AxiosConfig';
import FoodInput from '../CreateFood/FoodInput'

export default function ListFoods(){

    const [didLoad, setDidLoad] = useState(false)
    const [food, setFood] = useState(''); 

    useEffect(() =>{
        getFoods();
    }, [])

    function getFoods(){
        _axios.get('Food').then(response => {
            setFood(response.data);
            setDidLoad(true);
        });
    }

    if(didLoad){
        return <div>
        {food.map((item, index) => {
            return(
                <div key={index}>{item.name}</div>
            )
        })}
    </div>
    }
    else{
        return <h1>Laddar</h1>
    }
}