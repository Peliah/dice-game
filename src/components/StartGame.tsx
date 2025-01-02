import styled from "styled-components";

const StartGame = () => {
    return (
        <main>
            <ScoreContainer>
                <h1>0</h1>
                <p>Total Score</p>
            </ScoreContainer>
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
`