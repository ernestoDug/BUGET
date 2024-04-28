import { Component } from "react";
import PropTypes from 'prop-types';
import { FormStyle, InputStyle, ButtonStyle } from './Form.module';
// npx storybook@latest init
// npm run storybook
// краще компонент там створити протестувати а потім вже вставити собі 
// зразок в навва сторис джиек икс тільки воно ніхрена не працює

class Form extends Component {
  constructor() {
    super();
    // стет напряму тіьки в кострукторі
    this.state = {
      value: "",
      date: new Date().toISOString().substring(0, 10),
      comment: "",
    };
  }

  submiter = (e) => {
    e.preventDefault();
    // в класах пропси збрігаються в зис пропс
    // передали прокинутому пропсу функции   велью з стета
    this.props.changer(this.state.value);
    // для очистки поля вводу пілся відправки 
this.setState({
  balance: '',
  comment: '',
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
        <textarea name="comment" id="" cols="30" rows="10"
        placeholder="Залиште коментар"
        value={this.state.comment}
        onChange={this.changer}
        >

        </textarea>
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
