import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 16pt;
  margin-bottom: 20px;
  transition: ${({ theme }) => theme.transition('color')};

  ${({ isHidden }) =>
    isHidden &&
    `
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  `};
`;