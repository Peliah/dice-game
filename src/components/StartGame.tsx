import { useState } from "react";
import styled from "styled-components";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../styles/Button";

interface BoxProps {
    isSelected: boolean;
}

const StartGame = ({ gameLevel }: { gameLevel: string }) => {

    const arrNumber = [1, 2, 3, 4, 5, 6];
    const [selectedNumber, setSelectedNumber] = useState<number | undefined>(undefined);
    const [currentDice, setCurrentDice] = useState(1);
    const [score, setScore] = useState(0);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);


    const generateRandomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const rollDice = () => {
        if (!selectedNumber) {
            setError("You have not selected a number");
            return;
        }

        // Adjust randomness based on game level
        let randomNumber: number;
        // setup the game level
        // starting with level easy
        if (gameLevel === "Easy") {
            // 1 in 4 attempts is perfectly random, otherwise, favor the selected number
            // 25% chance for randomness
            const isRandom = Math.random() < 0.25;
            randomNumber = isRandom ? generateRandomNumber(1, 7) : selectedNumber;
        }
        // Medium Level gameplay
        else if (gameLevel === "Medium") {
            // 2 in 4 attempts (50%) is perfectly random
            // 50% chance for randomness
            const isRandom = Math.random() < 0.5;
            randomNumber = isRandom ? generateRandomNumber(1, 7) : selectedNumber;
        } else {
            // Hard level
            randomNumber = generateRandomNumber(1, 7);
        }

        setCurrentDice(randomNumber);

        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber);
        } else {
            setScore((prev) => prev - 2);
        }

        setSelectedNumber(undefined);
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

    const toggleRules = () => {
        setShowRules(prev => !prev);
    };

    return (
        <MainContainer>
            <div className="top_section">
                <ScoreContainer>
                    <h1>{score}</h1>
                    <p>Total Score</p>
                </ScoreContainer>
                <NumberSelectorContainer>
                    <p className="error">{error}</p>
                    <p>Level: {gameLevel}</p>
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
                    <p>Pick a number</p>
                </NumberSelectorContainer>
            </div>
            <RollDice currentDice={currentDice} rollDice={rollDice} />
            <div className="btns">
                <OutlineButton onClick={() => resetScoreHandler()}>Reset</OutlineButton>
                <Button onClick={toggleRules}>{showRules ? "Hide" : "Show"} rules</Button>
            </div>
            <RulesContainer show={showRules}>
                <h2>How to play dice Game</h2>
                <div className="text">
                    <ul>
                        <li>Guess a number from 1 - 6</li>
                        <li>Roll the dice by clicking the dice image</li>
                        <p><b>After rolling the dice; </b></p>
                        <li>if the number of the dice is same and your guessed number, you will get same point as the dice</li>
                        <li>if you get a wrong guess, 2 point will be deducted from your total score</li>
                    </ul>
                </div>
            </RulesContainer>
        </MainContainer>
    )
}

export default StartGame;

const MainContainer = styled.main`
    .top_section {
        display: flex;
        justify-content: space-around;
        align-items: center;

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 20px;
        }
    }

    .btns {
        margin-top: 2.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;

        @media (max-width: 768px) {
            margin-top: 1.5rem;
            gap: 8px;
        }
    }
`;

const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;

    h1 {
        font-size: 100px;
        line-height: 100px;

        @media (max-width: 768px) {
            font-size: 40px;
            line-height: 60px;
        }
    }

    p {
        font-size: 24px;
        font-weight: 500px;

        @media (max-width: 768px) {
            font-size: 16px;
        }
    }
`;

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

    .flex {
        display: flex;
        gap: 24px;

        @media (max-width: 768px) {
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
        }
    }

    p {
        font-size: 24px;
        font-weight: 700;
        padding-bottom: 4px;
        padding-top: 4px;

        @media (max-width: 768px) {
            font-size: 18px;
        }
    }

    .error {
        color: red;
    }
`;

const Box = styled.div<BoxProps>`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
    color: ${(props) => (props.isSelected ? 'white' : 'black')};
    cursor: pointer;

    &:hover {
        background-color: black;
        border: 1px solid transparent;
        color: white;
        transition: 0.3s background ease-in;
    }

    @media (max-width: 768px) {
        height: 40px;
        width: 40px;
        font-size: 20px;
    }
`;

const RulesContainer = styled.div<{ show: boolean }>`
    max-width: 800px;
    margin: 0 auto;
    background-color: #fbf1f1;
    padding: ${({ show }) => (show ? "20px" : "0 20px")};
    margin-top: 40px;
    border-radius: 10px;
    max-height: ${({ show }) => (show ? "500px" : "0")};
    overflow: hidden;
    transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;

    h2 {
        font-size: 24px;
        opacity: ${({ show }) => (show ? "1" : "0")};
        transition: opacity 0.3s ease-in-out;
        
        @media (max-width: 768px) {
            font-size: 20px;
        }
    }


    .text {
        margin-top: 24px;
        opacity: ${({ show }) => (show ? "1" : "0")};
        transition: opacity 0.3s ease-in-out;

        p {
            font-size: 18px;
            margin-top: 10px;

            @media (max-width: 768px) {
                font-size: 16px;
            }
        }
    }
`;

