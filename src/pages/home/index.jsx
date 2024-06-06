import * as S from "./styled";
import FirstContainer from "../../components/home-sections/first-section";
import SecondSection from "../../components/home-sections/second-section";
import ThirdSection from "../../components/home-sections/third-section";
import ForthSection from "../../components/home-sections/forth-section";
import FifthSection from "../../components/home-sections/fifth-section";

const Home = () => {
  return (
    <S.HomeoCntainer>
      <FirstContainer />
      <SecondSection />
      <ThirdSection/>
      <ForthSection/>
      <FifthSection/>
    </S.HomeoCntainer>
  );
};

export default Home;
