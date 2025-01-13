import styled, { keyframes } from "styled-components";
import { useState } from "react";
import Hero from "./components/Hero";
import StartGame from "./components/StartGame";
import { OutlineButton } from "./styles/Button";

interface ModalContentProps {
  isClosing: boolean;
}
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameLevel, setGameLevel] = useState("");
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const GAME_LEVELS = ["Easy", "Medium", "Hard"];

  const toggleGamePlay = () => {
    setIsLevelModalOpen(true);
  };

  const closeModal = () => {
    setIsClosing(true);
    // animate close
    setTimeout(() => {
      setIsLevelModalOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const selectGameLevel = (level: string) => {
    setGameLevel(level);
    closeModal();
    setTimeout(() => setIsGameStarted(true), 300);
  };

  return (
    <>
      {isGameStarted ? (
        <StartGame gameLevel={gameLevel} />
      ) : (
        <Hero toggle={toggleGamePlay} />
      )}

      {isLevelModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent isClosing={isClosing} onClick={(e) => e.stopPropagation()}>
            <div className="top-close" onClick={closeModal}>
              <div className="close">x</div>
            </div>
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
  );
}

export default App;


const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;


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

export const ModalContent = styled.div<ModalContentProps>`
  background: white;
  padding: 24px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  animation: ${(props) => (props.isClosing ? slideOut : slideIn)} 0.3s ease-out;


  h2 {
    margin-bottom: 16px;
    font-size: 24px;
    color: #333;
  }
  .top-close{
    /* text-align: end; */
    display: flex;
    align-items: center;
    justify-content: end;
    color: red;
    cursor: pointer;
  }
  .close{
    border: 1px solid red;
    padding: 0px 8px 0px 8px;
    width: fit-content;
    border-radius: 100%;
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
