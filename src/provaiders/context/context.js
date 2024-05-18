import { createContext, useReducer } from "react";
// редюсер змнює стат диспатчем диспатч це функція
import defoultContex from "./defoultContex";

const AppContext = createContext();
// дефолтне значення порожне

// функція редусера
const myReduser = (state, action) => {
  switch (action.tipe) {
    case "changeCurrency": {
      return {
        ...state,
        currensy: action.currensy,
      };
    }
    case "reset": {
      return defoultContex;
    }
    default: {
      throw new Error("No action");
    }
  }
};

const AppContextProvider = (props) => {
  const [state, dispath] = useReducer(() => myReduser, defoultContex);
  const Value = { state, dispath };
  return (
    <AppContextProvider value={Value}>
      {props.children}
      {/* все що в провайдере буде рерндреритеся якщо змінюватися валю буде */}
    </AppContextProvider>
  );
};

export { AppContext, AppContextProvider };
