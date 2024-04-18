import { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    // стет напряму тіьки в кострукторі
    this.state = {
      value: "",
    };
  }

  submiter = (e) => {
    e.preventDefault();
    // в класах пропси збрігаються в зис пропс
    // передали прокинутому пропсу функции   велью з стета
    this.props.changer(this.state.value);
    // console.log(1, this.state, 2, this.props);
  };

  //   на інпут
  changer = (e) => {
    const { value } = e.target;
    //  при зміні стану в інпуті відмалюється
    this.setState({
      value,
    });
  };

  render() {
    return (
      <form action="" onSubmit={this.submiter}>
        <input
          type="number"
          name="balance"
          placeholder="Сумма"
          value={this.state.value}
          onChange={this.changer}
        />
        <button type="submit">Зберегти</button>
      </form>
    );
  }
}

export default Form;
