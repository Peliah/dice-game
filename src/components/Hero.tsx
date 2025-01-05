import styled from "styled-components";
import { Button } from "../styles/Button";

interface HeroProps {
    toggle: () => void;
}

const Hero: React.FC<HeroProps> = ({ toggle }) => {
    return (
        <Container>
            <div className="image-container">
                <img src="/images/dice.png" alt="Dice" />
            </div>
            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    );
};

export default Hero;

const Container = styled.div`
    display: flex;
    max-width: 1180px;
    margin: 0 auto;
    min-height: 100vh;
    align-items: center;
    justify-content: space-between;

   
    .image-container {
        flex: 1;
        text-align: center;

        img {
            max-width: 100%;
            height: auto;
        }
    }

    .content {
        flex: 1;
        text-align: center;

        h1 {
            font-size: 96px;
            white-space: nowrap;
        }
    }

   
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;

        .content h1 {
            font-size: 48px;
            white-space: normal;
        }

        .content button {
            margin-top: 16px;
            padding: 12px 24px;
            width: 100%;
        }
    }
`;
