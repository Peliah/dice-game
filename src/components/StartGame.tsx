import { useState } from "react";
import styled from "styled-components";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../styles/Button";

const StartGame = () => {

    const arrNumber = [1, 2, 3, 4, 5, 6];
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [score, setScore] = useState(0);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);


    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const rollDice = () => {
        if (!selectedNumber) {
            setError("You have not selected a number");
            return;
        }
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);

        if (selectedNumber === randomNumber) {
            setScore(prev => prev + randomNumber);
        } else {
            setScore(prev => prev - 2);
        }

        setSelectedNumber(undefined)


    };

    const numberSelectorHandler = (value: number) => {
        setSelectedNumber(value);
        setError("");
    }

    const resetScoreHandler = () => {
        setSelectedNumber(undefined)
        setCurrentDice(1)
        setScore(0)
        setError("")
    }


    return (
        <MainContainer>
            <div className="top_section">
                <ScoreContainer>
                    <h1>{score}</h1>
                    <p>Total Score</p>
                </ScoreContainer>
                <NumberSelectorContainer>
                    <p className="error">{error}</p>
                    <div className="flex">
                        {arrNumber.map((value, i) => (
                            <Box
                                key={i}
                                onClick={() => numberSelectorHandler(value)}
                                isSelected={selectedNumber === value}
                            >
                                {value}
                            </Box>
                        ))}
                    </div>
                    <p>Select Number</p>
                </NumberSelectorContainer>
            </div>
            <RollDice currentDice={currentDice} rollDice={rollDice} />
            <div className="btns">
                <OutlineButton onClick={() => resetScoreHandler()}>Reset</OutlineButton>
                <Button onClick={() => setShowRules(prev => !prev)}>{showRules ? "Hide" : "Show"} rules</Button>
            </div>
            {
                showRules ?
                    <RulesContainer>
                        <h2>How to play dice Game</h2>
                        <div className="text">
                            <p>Select any number</p>
                            <p>Click on dice image</p>
                            <p>
                                After clicking on the dice if selected number is equal to dice number you will get same point as dice {" "}
                            </p>
                            <p>if you get a wrong guess, 2 point will be deducted from your total score</p>
                        </div>
                    </RulesContainer>
                    : ''
            }
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
        padding-bottom: 4px;
        padding-top: 4px;
    }

    .error{
        color: red;
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
    cursor: pointer;

    &:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
        transition: 0.3s background ease-in;
    }
`;

const MainContainer = styled.main`
    .top_section {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .btns{
        margin-top: 2.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;

    }
`;

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    background-color: #fbf1f1;
    padding: 20px;
    margin-top: 40px;
    border-radius: 10px;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;
    }
`;