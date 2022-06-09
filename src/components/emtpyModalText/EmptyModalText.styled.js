import { StyledContainer } from 'components/common/container/Container.styled';
import styled from 'styled-components';

export const StyledList = styled.ul`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.header};
`;
export const StyledItem = styled.li``;
export const StyledStepText = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
`;
export const StyledCreateText = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.21;
`;
export const StyledDescriptionText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.lightText};
`;

export const StyledBox = styled(StyledContainer)`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.header};
`;
export const StyledModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  min-width: 170px;
  padding: 0;
  margin-top: 20px;

  font-size: 14px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.defaultFont};
  transition: ${({ theme }) => theme.transition('background-color')},
    ${({ theme }) => theme.transition('color')},
    ${({ theme }) => theme.transition('outline-color')};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.mainBrandColor};
    outline: 1px solid ${({ theme }) => theme.colors.mainBrandColor};
    box-shadow: ${({ theme }) => theme.shadows.btnShadow};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-top: 20px;
    line-height: 1.21;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 180px;
    margin-top: 0;
    margin-bottom: 15px;
    margin-left: 48px;
  }
`;

export const StyledModalBox = styled.div`
  text-align: center;
`;
