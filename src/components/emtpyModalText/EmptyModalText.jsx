import { StyledBox, StyledItem, StyledList, StyledText } from "./EmptyModalText.styled";
import { ReactComponent as BookIcon } from 'images/svg/icon-book.svg';
import { ReactComponent as FlagIcon } from 'images/svg/flag.svg';
import { ReactComponent as ArrowIcon } from 'images/svg/arrow.svg';

export default function EmptyModalText() {
    return (
      
        <StyledList>
            <StyledItem>
                <StyledText>Крок 1. </StyledText>
                <StyledText>Створіть особисту
                    бібліотеку</StyledText>
                <ArrowIcon/>
                <StyledText>Додайте до неї книжки, які маєте намір прочитати.</StyledText>
                
                <BookIcon/>
                
            </StyledItem>
            <StyledItem>
                <StyledText>Крок 2. </StyledText>
                <FlagIcon/>
                <StyledText>Сформуйте своє перше тренування</StyledText>
                <ArrowIcon/>
                <StyledText>Визначте ціль, оберіть період, розпочинайте тренування.</StyledText>
            </StyledItem>
            </StyledList>
            
    )

}