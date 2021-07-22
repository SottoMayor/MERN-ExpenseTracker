import styled from 'styled-components';

export const ExpenseItemStyled = styled.article`

    &{
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        padding: 0.5rem;
        margin: 1rem 0;
        border-radius: 12px;
        background-color: ${props => props.theme.colors.primary};
    }

    &  section{
        color: white;
        font-size: 1rem;
        margin: 0 1rem;
        color: white;
    }

    &  h2{
        color: #3a3a3a;
        font-size: 1rem;
        flex: 1;
        margin: 0 1rem;
        color: white;
    }

    &  div{
        font-size: 1rem;
        font-weight: bold;
        color: white;
        background-color: ${props => props.theme.colors.secondary};
        border: 1px solid white;
        padding: 0.5rem;
        border-radius: 12px;
    }

    @media (min-width: 580px){
        & section {
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            flex: 1;
        }
    
        & h2 {
            font-size: 1.25rem;
        }
    
        & div {
            font-size: 1.25rem;
            padding: 0.5rem 1.5rem;
        }
    }  

`

    
