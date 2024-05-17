import React from 'react';
import * as S from './ContactForm.styled';

const ContactForm = () => {
  return (
    <S.ContactFormContainer>
      <S.ContactFormSection>
        <h3>Contact Us</h3>
        <form>
          <S.ContactFormField type="text" placeholder="Your Name" />
          <S.ContactFormField type="email" placeholder="Your Email" />
          <S.ContactFormField as="textarea" placeholder="Your Message" />
          <S.ContactFormButton type="submit">Send Message</S.ContactFormButton>
        </form>
      </S.ContactFormSection>
    </S.ContactFormContainer>
  );
};

export default ContactForm;
