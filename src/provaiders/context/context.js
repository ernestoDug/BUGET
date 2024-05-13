import { createContext, useReducer } from "react";
// редюсер змнює стат диспатчем диспатч це функція
import defoultContex from "./defoultContex";

const AppContext = createContext();
// дефолтне значення порожне

const AppContextProvider = (props) => {
  const [state, dispath] = useReducer(() => {}, defoultContex);
  const Value = {state, dispath};
  return (
    <AppContextProvider value={Value}>
      {props.children}
      {/* все що в провайдере буде рерндреритеся якщо змінюватися валю буде */}
    </AppContextProvider>
  );
};

export {
    AppContext,
AppContextProvider,
};
