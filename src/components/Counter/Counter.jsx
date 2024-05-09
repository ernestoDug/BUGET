import { useState, useEffect } from "react"

 import { H5StepStyle, ButtonStepStyle, FormStyleStatisttics, InputStatisticsStyle} from './Counter.module'


const Counter = () => {
    const [clicks, setClicks] = useState(0);
        const [step, setStep] = useState("");

    const submiterCounter = (e) => {
        e.preventDefault();
       
    }

    const changerCounter = (e)=> 
 setStep(+(e.target.value));

    const showValue = () => {

        setTimeout(() => {
            alert(clicks)
        }, 3000);
    }

    useEffect(()=> {
        // передали функцію для збільшення преввелью попердеоного значення кроку щоб
        // в масиіі заленостей не було степу бо буде цикл бескнечний
        setStep( (prevValue) => prevValue +1);

    }, [ setStep]);
    
    return (
        <>
<H5StepStyle>Лічильник {clicks}</H5StepStyle>
<FormStyleStatisttics onSubmit={submiterCounter}>
<ButtonStepStyle onClick= {() => setClicks(clicks + +step)} >Клацалка </ButtonStepStyle>
<ButtonStepStyle onClick= {showValue} >Покажи значення </ButtonStepStyle>

<InputStatisticsStyle
          type="number"
          name="step"
          placeholder="Задайте крок"
          value={step}
          onChange={changerCounter}
        />
</FormStyleStatisttics>
</>
    )
}

export default Counter