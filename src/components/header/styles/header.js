import styled from "styled-components"

export const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 985px;
    height: 8vh;
    min-height: 80px;
    background-color: black;
    justify-content: space-around;
    border-bottom: 1px white solid;
    z-index: 1;

    @media (max-width: 1450px) {
        min-height: 120px;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    margin-left: -1rem;
    @media (max-width: 1080px) {
        width: 20%;
        margin-left: 0;
    }
`

export const Title = styled.h2`
    white-space: nowrap;
    width: 70%;

    @media (max-width: 1080px) {
        display: none;
    }
`

export const Logo = styled.img`
    width: 30%;
    height: 100%;

    @media (max-width: 1450px) {
        width: 35%;
    }
    @media (max-width: 1080px) {
        width: 100%;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 40%;
    
    @media (max-width: 1450px) {
        display: block;
        text-align: center;
        padding-top: 1rem;
        width: 35%;
    }   
    
    @media (max-width: 1190px) {
        margin-left: -1rem;
    }
`;

export const LabelContainer = styled.div`
    min-width: 380px;

    @media (max-width: 1450px) {
        display: flex;
        justify-content: center;
    }

    @media (max-width: 1080px) {
        min-width: 0;
}
`

export const InputLabel = styled.label`
    margin: 0.5rem 0rem;
    font-size: 1.2rem;
    font-weight: bold;
    min-width: 100px;
    margin-left: 2rem;

    @media (max-width: 1450px) {
    }

    @media (max-width: 1080px) {
        margin-left: 1rem   ;
    }
`;

export const Input = styled.input`
    margin: 0.5rem 0.5rem;
    color: black;
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
`;

export const InputDataList = styled.datalist`

`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100%;
`

export const Button = styled.button`
    padding: 0.5rem 1rem;
    margin: 0 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    align-self: center;
    border: 2px solid white;
    background-color: black;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 5px;
    background-color: ${({ active }) => active && "rgba(210, 210, 210, 0.5)"};
    
    &:hover {
        background-color: rgba(210, 210, 210, 0.8);
    }
    &:active {
        border-color: black;
    }
`

export const Info = styled(Button)`
    border-radius: 50%;
    z-index: 10;

    @media (max-width: 1450px){
        margin-right: 2rem;
    }
`;

export const InfoContainer = styled.div`
    opacity: ${({ show }) => (show ? "100" : "0")};
    z-index: ${({ show }) => (show ? "0" : "-1")};
    position: absolute;
    background-color: black;
    border: white solid 2px;
    border-radius: 3px;
    margin-top: 38.5rem;
    right: 3.5%;
    width: 400px;
    padding: 0 1rem;
    transition: opacity 0.5s;

    @media (max-width: 1500px){
        right: 2%;
    }
`;

export const InfoTitle = styled.h2`

`

export const InfoText = styled.p`
    line-height: 1.5rem;
    font-size: 1.2rem;
`