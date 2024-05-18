import { useContext } from "react";
import { AppContext } from "../../provaiders/context/context";

const Settings = () => {
  const { state, dispath } = useContext(AppContext);

  const changerSettings = (e) => {
    const { value } = e.target;
    dispath({
      type: "changeCurrency",
      currensy: value,
    });
  };

  return (
    <>
      <form action="" onChange={changerSettings}>
        <label for="currensySelectID">
          {/* При використанні як атрибута <label>атрибут forмає значення 
    idелемента форми, до якого він відноситься. */}

          <h2>Валюта:</h2>

          <select
            name="currensySelect"
            id="currensySelectID"
            value={state.currensy}
          >
            <option value="UAH">Гривня</option>

            <option value="USD">Долар USA</option>

            <option value="EUR">Євро</option>
          </select>
        </label>
      </form>
    </>
  );
};

export default Settings;
