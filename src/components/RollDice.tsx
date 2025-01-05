import styled from "styled-components";

interface RollDiceProps {
    currentDice: number;
    rollDice: () => void;
}
const RollDice: React.FC<RollDiceProps> = ({ currentDice, rollDice }) => {

    return (
        <DiceContainer>
            <div className="dice" onClick={rollDice}>
                <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}

export default RollDice;

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .dice{
        cursor: pointer;
    }

    p {
        font-size: 24px;
    }
`;