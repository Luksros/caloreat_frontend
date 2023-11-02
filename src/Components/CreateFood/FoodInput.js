import React, {useState, useEffect, useRef} from 'react';
import _axios from '../Axios/AxiosConfig';
import './FoodInputStyles.css';

export default function FoodInput(){

    const url = "Food";
    const [data, setData] = useState({
        Name: "",
        Calories: 0.0,
        Carbohydrates: 0.0,
        Protein: 0.0,
        Fat: 0.0,
        Fibre: 0.0
    })

    function handle(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);   
    }

    function submit(e){
        e.preventDefault();

        var _food = {Name: data.Name,
            Calories: Number(data.Calories),
            Carbohydrates: Number(data.Carbohydrates),
            Protein: Number(data.Protein),
            Fat: Number(data.Fat),
            Fibre: Number(data.Fibre)}

        _axios({method: 'post', url: url, data: _food}).then((result) => console.log(result));
    }
    

    return <div className="foodInputContainer">
        <form onSubmit={(e) => submit(e)}>
            <input onChange={(e) => handle(e)} type="text" id="Name" placeholder="Namn" className="foodInput"></input>
            <input onChange={(e) => handle(e)}  type="number" step="0.1" id="Calories" placeholder="Kalorier"className="foodInput"></input>
            <input onChange={(e) => handle(e)}  type="number" step="0.1" id="Carbohydrates" placeholder="Kolhydrater" className="foodInput"></input>
            <input onChange={(e) => handle(e)}  type="number" step="0.1" id="Protein" placeholder="Protein" className="foodInput"></input>
            <input onChange={(e) => handle(e)}  type="number" step="0.1" id="Fat" placeholder="Fett" className="foodInput"></input>
            <input onChange={(e) => handle(e)}  type="number" step="0.1" id="Fibre" placeholder="Fibrer" className="foodInput"></input>
            <button id="FoodInputConfirmButton">Spara</button>
        </form>
    </div>
}