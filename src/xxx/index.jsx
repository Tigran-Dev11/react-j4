import { useTranslation } from "react-i18next";
import { menu } from "../utils/data";
function Klir() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <select defaultValue="en" onChange={changeLanguage}>
        <option value="en">Eng</option>
        <option value="ru">Rus</option>
      </select>
      <p>{t("header.title")}</p>
    </div>
  );
}

export default Klir;
