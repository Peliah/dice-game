import styled from "styled-components";
import { Button } from "../styles/Button";

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

