import { StyledItem, StyledList, StyledDescriptionText, StyledStepText, StyledCreateText, StyledModalButton, StyledModalBox } from "./EmptyModalText.styled";
import { ReactComponent as BookIcon } from 'images/svg/icon-book.svg';
import { ReactComponent as FlagIcon } from 'images/svg/flag.svg';
import { ReactComponent as ArrowIcon } from 'images/svg/arrow.svg';
import { useContext } from "react";
import { PageFormatContext, format } from 'context/pageFormatContext';

export default function EmptyModalText() {
    const pageFormat = useContext(PageFormatContext);
      const isResponse = pageFormat === format.response;
    const isMobile = pageFormat === format.mobile;
  
    return (
      <>
        <StyledList>
            <StyledItem>
                <StyledStepText>Крок 1.</StyledStepText>
                <StyledCreateText>Створіть особисту
                    бібліотеку</StyledCreateText>
                <ArrowIcon/>
                <StyledDescriptionText>Додайте до неї книжки, які маєте намір прочитати.</StyledDescriptionText>
                
                <BookIcon/>
                
            </StyledItem>
            <StyledItem>
                <StyledStepText>Крок 2. </StyledStepText>
                <FlagIcon/>
                <StyledCreateText>Сформуйте своє перше тренування</StyledCreateText>
                <ArrowIcon/>
                <StyledDescriptionText>Визначте ціль, оберіть період, розпочинайте тренування.</StyledDescriptionText>
            </StyledItem>
            </StyledList>
            {(isMobile || isResponse) &&
                <StyledModalBox>
                    <StyledModalButton> Ок</StyledModalButton>
                    </StyledModalBox>
       }
            </>
    )

}