import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constant";
import "./style.scss";

const Home = () => {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate(ROUTES.login);
  };

  const goToRegisterPage = () => {
    navigate(ROUTES.register);
  };

  return (
    <main>
      <h1>Добро пожаловать на наш сайт!</h1>
      <p>Это платформа для обмена знаниями, где пользователи могут задавать вопросы и получать ответы от сообщества. Здесь вы можете найти ответы на свои вопросы, поделиться своими знаниями и узнать что-то новое.</p>
      <h2>Основные возможности:</h2>
      <ul>
        <li>Задавайте вопросы и получайте качественные ответы от сообщества.</li>
        <li>Поделитесь своими знаниями, ответив на вопросы других пользователей.</li>
        <li>Следите за интересующими вас темами и получайте уведомления о новых вопросах и ответах.</li>
        <li>Участвуйте в обсуждениях и обменивайтесь мнениями с другими пользователями.</li>
        <li>Получайте рейтинг за полезные ответы и вопросы, и повышайте свой статус в сообществе.</li>
      </ul>
      <p>Чтобы начать, пожалуйста, <button onClick={goToRegisterPage}>зарегистрируйтесь</button> или <button onClick={goToLoginPage}>войдите</button> в свой аккаунт.</p>
      <Link to="https://google.com" target="_blank">google</Link>
    </main>
  );
};
 
export default Home;
