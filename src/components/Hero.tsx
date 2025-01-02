import styled from "styled-components";

const Hero = ({ toggle }) => {
    return (
        <Container>
            <div>
                <img src="/images/dice.png" />
            </div>
            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}

export default Hero

const Container = styled.div`
    display: flex;
    max-width: 1180px;
    margin: 0 auto;
    min-height: 100vh;
    align-items: center;

    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;

const Button = styled.button`
    color: white;
    padding: 10px 10px;
    background: #000000;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.4s background ease-in;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }

`;