import { useState } from "react"

 import { H5StepStyle, ButtonStepStyle, FormStyleStatisttics, InputStatisticsStyle} from './Counter.module'


const Counter = () => {
    const [clicks, setClicks] = useState(0);
    const [step, setStep] = useState(0);

    return (
        <>
<H5StepStyle>Лічильник {clicks}</H5StepStyle>
<FormStyleStatisttics>
<ButtonStepStyle onClick= {() => setClicks(clicks +step)} >Клацалка </ButtonStepStyle>
<InputStatisticsStyle
          type="number"
          name="step"
          placeholder="Задайте крок"
          value={step}
          onChange={(e)=> setStep(e.target.value)}
        />
</FormStyleStatisttics>
</>
    )
}

export default Counter