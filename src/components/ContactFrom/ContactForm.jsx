import React from 'react';
import * as S from './styled';
import { useTranslation } from 'react-i18next'; 

const ContactForm = () => {
  const { t } = useTranslation(); 

  return (
    <S.ContactFormContainer>
      <S.ContactFormSection>
        <h3>{t('contactUs')}</h3>
        <form>
          <S.ContactFormField type="text" placeholder={t('yourName')} />
          <S.ContactFormField type="email" placeholder={t('yourEmail')} />
          <S.ContactFormField as="textarea" placeholder={t('yourMessage')} />
          <S.ContactFormButton type="submit">{t('sendMessage')}</S.ContactFormButton>
        </form>
      </S.ContactFormSection>
    </S.ContactFormContainer>
  );
};

export default ContactForm;
