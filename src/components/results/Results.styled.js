import styled from 'styled-components';
import { Input, Button } from '../LibraryForm/LibraryForm.styled';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    justify-content: space-evenly;
    align-items: center;
  }
`;
export const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.21;
  margin-bottom: 12px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 14px;
    margin-bottom: 27px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    font-size: 12px;
    align-items: center;
    margin-bottom: 12px;
  }
`;

export const InputDate = styled(Input)`
  width: 110px;
  font-size: 14px;
  line-height: 1.21;
`;

export const Label = styled.label`
  width: 110px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 42px;
  color: ${({ theme }) => theme.colors.lightText};
  & span {
    font-size: 11px;
    line-height: 1.2;
    margin-bottom: 4px;
  }
  & .icon {
    position: absolute;
    top: 65%;
    right: 0;
    margin-top: 0;
    transform: translateY(-50%);
    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-right: 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin-right: 0;
  }
`;

export const ButtonDate = styled(Button)`
  width: 240px;
  margin-top: 28px;
  outline-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.mainBrandColor};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.hover};
    outline: 1px solid ${({ theme }) => theme.colors.hover};
    box-shadow: ${({ theme }) => theme.shadows.btnShadow};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-bottom: 0;
    margin-top: 17px;
    margin-left: 12px;
    margin-right: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin-top: 28px;
    margin-left: 0;
  }
`;

export const Wrapper = styled.div`
  margin-top: 25px;
  margin-bottom: 24px;
  margin-right: auto;
  margin-left: auto;
  width: 280px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 280px;
  }
`;
