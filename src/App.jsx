import { useTranslation } from "react-i18next";
import { menu } from "./utils/data";
function App() {
  const { t, i18n } = useTranslation();
  let number = 10;
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <p>{t("header.title")}</p>
      <h1>{t("header.number", { num: number })}</h1>
      <select defaultValue="en" onChange={changeLanguage}>
        <option value="en">Eng</option>
        <option value="am">Arm</option>
      </select>

      <ul>
        {menu(t).map((menu) => (
          <li key={menu.id}>{menu.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
