import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding-bottom: 40px;
  }
`;

export const RegistrationFormTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 8px;
  width: 280px;
  max-width: 100%;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 320px;
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

export const LoginFormIcon = styled.span`
  margin-left: 3px;
  color: ${({ theme }) => theme.colors.mainBrandColor};
`;

export const Input = styled.input`
  margin-bottom: 25px;
  width: 280px;
  max-width: 100%;
  height: 42px;
  border: none;
  background-color: ${({ theme }) => theme.colors.iconsHover};
  box-shadow: ${({ theme }) => theme.shadows.inputShadow};

  ::placeholder {
    padding-left: 8px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.21;
    color: ${({ theme }) => theme.colors.placeholder};
  }
  :last-of-type {
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-bottom: 25px;
    width: 320px;
    :last-of-type {
      margin-bottom: 32px;
    }
  }
`;

export const LoginFormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  max-width: 100%;
  height: 60px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.mainBrandColor};
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 320px;
    margin-bottom: 20px;
  }
`;

export const LoginFormRef = styled.span`
  display: block;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
`;

export const LoginRef = styled.a`
  display: block;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 1.23;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.mainBrandColor};
`;

export const Error = styled.p`
  margin-top: -20px;
  padding-bottom: 5px;
  :last-of-type {
    margin-top: -22px;
    padding-bottom: 7px;
  }
  font-size: 10px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.error};
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-top: -20px;
    padding-bottom: 5px;
    :last-of-type {
      margin-top: -30px;
      padding-bottom: 15px;
    }
  }
`;

export const Appeal = styled.p`
  margin-right: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 1.23;
  color: ${({ theme }) => theme.colors.lightText};
`;
export const Question = styled.div`
  display: flex;
`;
