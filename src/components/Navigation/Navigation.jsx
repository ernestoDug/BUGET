import React, { useEffect } from 'react';
import {  useLocation, useNavigate    } from "react-router-dom";

import {  ButtonStyle } from '../Form/Form.module';
import {UlNavigateStyle} from '../Navigation/Navigation.module';
 
const Navigation = () => {
    // Хук useLocation возвращает объект текущего местоположения.
   const location = useLocation();
   const navigate = useNavigate();
//    Хук useNavigate возвращает функцию для программной навигации
// що ми і робимо на кнопках  


    useEffect(() => {
        console.log('Поточне місцезнаходження ', location);
      }, [location]);
    

    return(
<nav>
<UlNavigateStyle>
    <li>
    <ButtonStyle onClick={() => navigate('home', { replace: false })}>
    Домашня
</ButtonStyle>
         </li>
    <li>
    <ButtonStyle onClick={() => navigate('statistics', { replace: false })}>
    Статистика
</ButtonStyle>    
</li>
    <li>
        {/* у лапках в навигейт пишемо те що у пошук адресі будемо бачити 
        і те що юслокайшин буде в косоль виводити
        */}
    <ButtonStyle onClick={() => navigate('about', { replace: false })}>
    Про...
</ButtonStyle>    
    </li>
</UlNavigateStyle>
</nav>
    )
}

export default Navigation

