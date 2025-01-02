import { useState } from "react";
import styled from "styled-components";

const StartGame = () => {

    const arrNumber = [1, 2, 3, 4, 5, 6];
    const [selectedNumber, setSelectedNumber] = useState(1);


    return (
        <main>
            <ScoreContainer>
                <h1>0</h1>
                <p>Total Score</p>
            </ScoreContainer>
            <div>
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
        </main>
    )
}

export default StartGame;

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