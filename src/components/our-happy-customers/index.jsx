import * as S from "./styled";
import { commentsUsers } from "../../utils/constants";

const OurHappyCustomers = () => {
  return (
    <S.HomeCont>
      <S.ul>
        {commentsUsers.map(
          ({ title, description, fiveStars, approvedUser }) => (
            <S.li>
              <S.fiveStars src={fiveStars} />
              <S.nameAndSuccessCont>
                <S.userName>{title}</S.userName>
                <S.approvedUserIcon src={approvedUser} />
              </S.nameAndSuccessCont>
              <S.descriptionUser>{description}</S.descriptionUser>
            </S.li>
          )
        )}
      </S.ul>
    </S.HomeCont>
  );
};



export default OurHappyCustomers
