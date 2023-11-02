import React, {useState, useEffect} from 'react';
import _axios from '../Axios/AxiosConfig';
import FoodInput from '../CreateFood/FoodInput';
import IngredientInput from '../CreateIngredient/IngredientInput';
import ListFoods from '../ListFoods/ListFoods';
import '../Main/HomepageStyles.css'

export default function HomePage(){

    return (
    <div>
        <div id="InputContainer">
            <FoodInput/>
            <IngredientInput/>
            {/* <ListFoods/> */}
        </div>    
    </div>)
}