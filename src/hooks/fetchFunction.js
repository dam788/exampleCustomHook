import { useEffect } from 'react';

// los custom hook la mayoria de las veces te devuelven un array o un objeto,
// en este caso lo unico que hice fue actualizar el estado del componente
// fon el fetch....

export const useFetch = (url, setData) => {

  
  
  useEffect(() => {
    if (url === '') return null;
    
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // aca lo actualizo
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      })

  }, [setData, url]);

  // aca te devolveria un array ejemplo:
  // return[data,error,loading];
};
