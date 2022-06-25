import Circle from "../circle/Circle";
import ChooseLogic from "./ChooseLogic";
import { CircleArticle, CircleArticle__result,CircleNotActive, CircleArticle__picked } from "./css/Choose.style";

const Choose = ({normal, selected, handleRestart}) => {

    const {
        chooseNormal,
        chooseLizard,
        active,
        showResult,
        result
    } = ChooseLogic(normal, selected)

  
    return (
            <CircleArticle grid={showResult}>

               <CircleArticle__picked>
                <h2>You Picked</h2>
                  <Circle img={selected} shadow={result === 'you win' && showResult ? true : ""}></Circle>
               </CircleArticle__picked>

               {showResult &&  
                <CircleArticle__result>
                    <h3>{result}</h3>
                    <button onClick={handleRestart}>Play again</button>
                </CircleArticle__result>}

                  <CircleArticle__picked>
                    <h2>The House picked</h2>
                    {normal && active && <Circle img={chooseNormal} shadow={result === 'you loose' && showResult ? true: ""}></Circle>}
                       {normal && !active && <CircleNotActive></CircleNotActive> }
                       {!normal && !active && <CircleNotActive></CircleNotActive> }
                    {!normal && active && <Circle img={chooseLizard} shadow={result === 'you loose' && showResult ? true: ""}></Circle>}
                  </CircleArticle__picked>

            </CircleArticle>
    )
}

export default Choose;