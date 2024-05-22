import * as S from "./styled";
import FirstContainer from "../../components/home-sections/first-section";
import SecondSection from "../../components/home-sections/second-section";

const Home = () => {
  return (
    <S.HomeoCntainer>
      <FirstContainer />
      <SecondSection />
    </S.HomeoCntainer>
  );
};

export default Home;
