import styled from 'styled-components';

export const StyledRatingBox = styled.div`
  max-width: 280px;
  max-height: 395px;
`;

export const StyledRatingText = styled.p`
  font-size: 16px;
  line-height: 1.25;
`;
export const StyledRatingResumeText = styled(StyledRatingText)``;
export const StyledRatingForm = styled.form``;
export const StyledRatingTextArea = styled.textarea`
  display: block;
  padding: 8px;
  resize: none;
  width: 100%;
  height: 395px;
  border: 1px solid ${({ theme }) => theme.colors.placeholder};
  border-radius: 4px;
`;
