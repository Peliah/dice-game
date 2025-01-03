import { useState } from "react";
import styled from "styled-components";
import RollDice from "./RollDice";

const StartGame = () => {

    const arrNumber = [1, 2, 3, 4, 5, 6];
    const [selectedNumber, setSelectedNumber] = useState(1);


    return (
        <MainContainer>
            <div className="top_section">
                <ScoreContainer>
                    <h1>0</h1>
                    <p>Total Score</p>
                </ScoreContainer>
                <NumberSelectorContainer>
                    <div className="flex">
                        {arrNumber.map((value, i) => (
                            <Box
                                key={i}
                                onClick={() => setSelectedNumber(value)}
                                isSelected={selectedNumber === value}
                            >
                                {value}
                            </Box>
                        ))}
                    </div>
                    <p>Select Number</p>
                </NumberSelectorContainer>
            </div>
            <RollDice />
        </MainContainer>
    )
}

export default StartGame;

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;


    .flex {
        display: flex;
        gap: 24px;

    }
    p {
        font-size: 24px;
        font-weight: 700px;
    }
`;

const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;

    h1{
        font-size: 100px;
        line-height: 100px
    }
    p{
        font-size: 24px;
        font-weight: 500px;
    }
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    background-color: ${(props) => props.isSelected ? 'black' : 'white'};
    color: ${(props) => props.isSelected ? 'white' : 'black'};
`;

const MainContainer = styled.main`
    .top_section {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`;