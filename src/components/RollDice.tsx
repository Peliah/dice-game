import { useState } from "react";
import styled, { keyframes } from "styled-components";

interface RollDiceProps {
    currentDice: number;
    rollDice: () => void;
}
const RollDice: React.FC<RollDiceProps> = ({ currentDice, rollDice }) => {

    const [isSpinning, setIsSpinning] = useState(false);

    const handleRollDice = () => {
        setIsSpinning(true);

        setTimeout(() => {
            rollDice();
            setIsSpinning(false);
        }, 500);
    };

    return (
        <DiceContainer>
            <div className={`dice ${isSpinning ? "spinning" : ""}`} onClick={handleRollDice}>
                <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}

export default RollDice;


const spinAnimation = keyframes`
    0% { transform: rotate(0deg); }
    50% { transform: rotate(1440deg); }
    100% { transform: rotate(2880deg); }
`;

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .dice {
        cursor: pointer;
        transition: transform 0.2s ease-in-out;

        &.spinning {
            animation: ${spinAnimation} 500ms linear;
        }
    }

    p {
        font-size: 24px;
    }
`;



