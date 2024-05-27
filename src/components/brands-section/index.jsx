import { brandsNames } from "../../utils/constants";
import * as S from "./styled";

const Brands = () => {
  return (
    <S.brandsContainer>
      {brandsNames.map((item, index) => {
        return <S.brandImg key={index} src={item.brand} />;
      })}
    </S.brandsContainer>
  );
};

export default Brands;
