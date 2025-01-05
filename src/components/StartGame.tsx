import { useState } from "react";
import styled from "styled-components";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../styles/Button";

interface BoxProps {
    isSelected: boolean;
}

const StartGame = () => {

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
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice(randomNumber);

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

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    background-color: #fbf1f1;
    padding: 20px;
    margin-top: 40px;
    border-radius: 10px;

    h2 {
        font-size: 24px;

        @media (max-width: 768px) {
            font-size: 20px;
        }
    }

    .text {
        margin-top: 24px;

        p {
            font-size: 18px;

            @media (max-width: 768px) {
                font-size: 16px;
            }
        }
    }
`;
