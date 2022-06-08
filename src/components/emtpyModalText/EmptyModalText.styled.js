import { StyledContainer } from 'components/common/container/Container.styled';
import styled from 'styled-components';

export const StyledList = styled.ul`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.header};
`;
export const StyledItem = styled.li``;
export const StyledText = styled.p``;
export const StyledBox = styled(StyledContainer)`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.header};
`;
