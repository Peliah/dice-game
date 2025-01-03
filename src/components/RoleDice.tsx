import styled from "styled-components";

const RoleDice = () => {
    return (
        <DiceContainer>
            <div>
                <img src="/images/dice/dice_1.png" alt="dice 1" />
            </div>
        </DiceContainer>
    )
}

export default RoleDice;

const DiceContainer = styled.div`
    display: flex;
    justify-content: center;
`;