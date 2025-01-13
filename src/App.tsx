import styled from "styled-components";
import { useState } from "react"
import Hero from "./components/Hero"
import StartGame from "./components/StartGame";
import { OutlineButton } from "./styles/Button";


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameLevel, setGameLevel] = useState("");
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);

  const GAME_LEVELS = ["Easy", "Medium", "Hard"];

  const toggleGamePlay = () => {
    setIsLevelModalOpen(true);
  }

  const selectGameLevel = (level: string) => {
    setGameLevel(level);
    setIsLevelModalOpen(false);
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
      {isGameStarted ? <StartGame gameLevel={gameLevel} /> : <Hero toggle={toggleGamePlay} />}

      {isLevelModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>Select Game Level</h2>
            <LevelList>
              {GAME_LEVELS.map((level) => (
                <li key={level}>
                  <OutlineButton onClick={() => selectGameLevel(level)}>
                    {level}
                  </OutlineButton>
                </li>
              ))}
            </LevelList>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  )
}

export default App


export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 24px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;

  h2 {
    margin-bottom: 16px;
    font-size: 24px;
    color: #333;
  }
`;

export const LevelList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin: 12px 0;
  }
`;

export const LevelButton = styled.button`
  padding: 12px 18px;
  background: #4fb7dd;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: #3a96b2;
  }
`;

