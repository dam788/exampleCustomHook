import { useState } from 'react';
import {useFetch} from '../hooks/fetchFunction';


export const Formulario=({setData})=>{
    const [inputValue,setInputValue]=useState({
    pais:'',
    ciudad:''
    })
    const {ciudad, pais} = inputValue;
    const [consulta, setConsulta]=useState("");

    const handelvalor=({target})=>{
        setInputValue({
            ...inputValue,
            [target.name]:target.value
        })
    }

    const Agregar= (e)=>{
        e.preventDefault();
        
        // validacion por si tenes algun campo vacio y esto devolveria nada si no le pasas si o si algo a los inputs
        if(pais.trim()==="" || ciudad.trim()===""){return null}
        const api=`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=430fe26998dfb30d155f549706857a18`;
        setConsulta(api)
    }
    
    useFetch(consulta,setData)


    return(<>
    <form
    onSubmit={Agregar}
        >
            
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handelvalor}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    onChange={handelvalor}
                >
                    <option value="">-- Seleccione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País: </label>
            </div>

            <div className="input-field col s12">
                <button  
                    type="submit"
                    
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                >
                    Buscar clima
</button>
            </div>
        </form>
    </>
    )
}