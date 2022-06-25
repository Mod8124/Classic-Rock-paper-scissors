import { useSelector } from "react-redux"
import MainButonStyles from "./css/MainButton.styles"

const MainButton = () => {
    const points = useSelector((state)=> state.points.value)
    return (
        <MainButonStyles>
            Score
            <span> {points}</span>
        </MainButonStyles>
    )
}

export default MainButton;