import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>ОТАКОЇ!</h1>
      <p>Вибачте, сталася неочікувана помилка.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}