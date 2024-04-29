import { Component } from "react";
import PropTypes from 'prop-types';
import { FormStyle, InputStyle, ButtonStyle, TextAreaStyle } from './Form.module';
// npx storybook@latest init
// npm run storybook
// краще компонент там створити протестувати а потім вже вставити собі 
// зразок в навва сторис джиек икс тільки воно ніхрена не працює

class Form extends Component {
  constructor() {
    super();
    // стет напряму тіьки в кострукторі
    this.state = {
      date: new Date().toISOString().substring(0, 10),
      value: "",
      comment: "",
    };
  }

  submiter = (e) => {
    e.preventDefault();
    // в класах пропси збрігаються в зис пропс
    // передали прокинутому пропсу функции   cстети важливий порядок 
    this.props.changer(this.state.value, this.state.date,  this.state.comment);
    // для очистки поля вводу пілся відправки 
this.setState({
  value: '',
  comment: '',
  date: '',
})  
};

  //   на інпут
  changer = (e) => {
    // он ченджер опрауьовує так багато полів 
    const { value, name } = e.target;
    //  при зміні стану в інпуті відмалюється
    this.setState({
      [name]: name === 'balance' ? +value : value,
    });
    
  };

  render() {
    return (
      <FormStyle action="" onSubmit={this.submiter}>
        <InputStyle
          type="number"
          name="value"
          placeholder="Сумма"
          value={this.state.value}
          onChange={this.changer}
        />
         <InputStyle
          type="date"
          name="date"
          placeholder="чч.мм.рр"
          value={this.state.date}
          onChange={this.changer}
        />

        <TextAreaStyle name="comment" id="" cols="30" rows="10"
        placeholder="Залиште коментар"
        value={this.state.comment}
        onChange={this.changer}
        >

        </TextAreaStyle>
        <ButtonStyle type="submit">Зберегти</ButtonStyle>
      </FormStyle>
    );
  }
}

// проптайпи
Form.propTypes = {
  value: PropTypes.string,
changer: PropTypes.func.isRequired,
};

export default Form;
