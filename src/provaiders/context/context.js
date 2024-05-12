import { createContext } from 'react';

const curency = {
    value: 'UAH', 
    title: 'гривня'
}


const СurencyContext = createContext('curency');


export default СurencyContext;