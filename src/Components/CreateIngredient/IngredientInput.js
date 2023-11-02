import React, {useState, useEffect, useRef} from 'react';
import _axios from '../Axios/AxiosConfig';
import IngredientSelect from './IngredientSelect';
import '../CreateFood/FoodInputStyles.css'

export default function IngredientInput(){

    const foodsUrl = "Food"
    const [didLoad, setDidLoad] = useState(false)
    const [food, setFood] = useState(''); 

    useEffect(() =>{
        getFoods();
    }, [])

    function getFoods(){
        _axios.get(foodsUrl).then(response => {
            setFood(response.data);
            setDidLoad(true);
        });
    }

    // function submit(e){
    //     e.preventDefault();

    //     var _ingredient = {
    //         FoodId: Number(data.FoodId),
    //         Grams: Number(data.Grams)
    //     }

    //     _axios({method: 'post', url: url, data: _ingredient}).then((result) => console.log(result));
    // }
    
    if(didLoad){
        return <div className="foodInputContainer">
            <IngredientSelect/>
        </div>
    } else{
        return <></>
    }
    
}