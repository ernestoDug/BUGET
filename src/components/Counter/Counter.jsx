import { useState } from "react"

 import { H5StepStyle, ButtonStepStyle, FormStyleStatisttics, InputStatisticsStyle} from './Counter.module'


const Counter = () => {
    const [clicks, setClicks] = useState(0);
        const [step, setStep] = useState("");

    const submiterCounter = (e) => {
        e.preventDefault();
       
    }

    const changerCounter = (e)=> 
 setStep(+(e.target.value))

    
    return (
        <>
<H5StepStyle>Лічильник {clicks}</H5StepStyle>
<FormStyleStatisttics onSubmit={submiterCounter}>
<ButtonStepStyle onClick= {() => setClicks(clicks +step)} >Клацалка </ButtonStepStyle>
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