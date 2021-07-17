import { useState, useEffect } from 'react';
// import {useFetch} from '../hooks/fetchFunction';

export const Formulario = ({
  setData /* fijate que me traigo el setdata como prop*/,
}) => {
  const [inputValue, setInputValue] = useState({
    pais: '',
    ciudad: '',
  });
  const { ciudad, pais } = inputValue;
  const [consulta, setConsulta] = useState('');

  const handelvalor = ({ target }) => {
    setInputValue({
      ...inputValue,
      [target.name]: target.value,
    });
  };

  const Agregar = (e) => {
    e.preventDefault();

    // validacion por si tenes algun campo vacio y esto devolveria nada si no le pasas si o si algo a los inputs
    if (pais.trim() === '' || ciudad.trim() === '') {
      return null;
    }
    const api = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=430fe26998dfb30d155f549706857a18`;
    setConsulta(api);
  };

  const fetchingApi = (url, seteoEstado) => {
    if (url === '') return null;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // aca lo actualizo
        seteoEstado(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    //   si no le paso los parametros a la funcion no me toma las dependencias del array de useEffect, sino probalo...
    fetchingApi(consulta, setData);
  }, [setData, consulta]);

  return (
    <>
      <form onSubmit={Agregar}>
        <div className='input-field col s12'>
          <input
            type='text'
            name='ciudad'
            id='ciudad'
            onChange={handelvalor}
          />
          <label htmlFor='ciudad'>Ciudad: </label>
        </div>

        <div className='input-field col s12'>
          <select name='pais' id='pais' onChange={handelvalor}>
            <option value=''>-- Seleccione un país --</option>
            <option value='US'>Estados Unidos</option>
            <option value='MX'>México</option>
            <option value='AR'>Argentina</option>
            <option value='CO'>Colombia</option>
            <option value='CR'>Costa Rica</option>
            <option value='ES'>España</option>
            <option value='PE'>Perú</option>
          </select>
          <label htmlFor='pais'>País: </label>
        </div>

        <div className='input-field col s12'>
          <button
            type='submit'
            className='waves-effect waves-light btn-large btn-block yellow accent-4'
          >
            Buscar clima
          </button>
        </div>
      </form>
    </>
  );
};
