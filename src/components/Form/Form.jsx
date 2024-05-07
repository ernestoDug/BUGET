import PropTypes from "prop-types";
import { useState } from "react";

import {
  FormStyle,
  InputStyle,
  ButtonStyle,
  TextAreaStyle,
} from "./Form.module";
// npx storybook@latest init
// npm run storybook
// краще компонент там створити протестувати а потім вже вставити собі
// зразок в навва сторис джиек икс тільки воно ніхрена не працює

const Form = ({ changer }) => {
  // const [form, setForm] = useState({
  //   value: "",
  //   date: new Date().toISOString().substring(0, 10),
  //   comment: "",
  // });

  const [value, setValue] = useState("");
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [comment, setComment] = useState("");

  const submiter = (e) => {
    e.preventDefault();
    // в класах пропси збрігаються в зис пропс
    // передали прокинутому пропсу функции   cстети

    changer(value, date, comment);
    // для очистки поля вводу пілся відправки
    setValue("");
    setComment("");
  };

  // обранник універсальний
  const changerForm = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "value": {
        setValue(value);
        break;
      }

      case "date": {
        setDate(value);
        break;
      }

      case "comment": {
        setComment(value);
        break;
      }
      default:
        return;
    }
  };

  return (
    <FormStyle action="" onSubmit={submiter}>
      <InputStyle
        type="number"
        name="value"
        placeholder="Сумма"
        value={value}
        onChange={changerForm}
      />
      <InputStyle
        type="date"
        name="date"
        placeholder="чч.мм.рр"
        value={date}
        onChange={changerForm}
      />

      <TextAreaStyle
        name="comment"
        id=""
        cols="30"
        rows="10"
        placeholder="Залиште коментар"
        onChange={changerForm}
      ></TextAreaStyle>
      <ButtonStyle type="submit">Зберегти</ButtonStyle>
    </FormStyle>
  );
};

// проптайпи
Form.propTypes = {
  value: PropTypes.string,
  changer: PropTypes.func.isRequired,
};

export default Form;
