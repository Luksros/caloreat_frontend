import React, {useState, useEffect, useRef} from 'react';
import _axios from '../Axios/AxiosConfig';

export default function IngredientSelect(){

    const url = "Ingredient";
    const [data, setData] = useState({
        FoodId: 0,
        Grams: 0.0
    })

    function handle(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);   
    }

    function submit(e){
        e.preventDefault();

        var _ingredient = {
            FoodId: Number(data.FoodId),
            Grams: Number(data.Grams)
        }

        _axios({method: 'post', url: url, data: _ingredient}).then((result) => console.log(result));
    }
    

    return <div className="foodInputContainer">
        <form onSubmit={(e) => submit(e)}>
            <select onChange={(e) => handle(e)} id="FoodId" placeholder="Ingrediens" className="foodInput"></select>
            <br></br>
            <input onChange={(e) => handle(e)}  type="number" step="0.1" id="Grams" placeholder="Gram"className="foodInput"></input>
            <button id="IngredientInputConfirmButton">Spara</button>
        </form>
    </div>
}