import { render, screen, fireEvent } from "@testing-library/react";
import MainButton from '../MainButton'
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit"
import pointsReducer from '../../../redux/store/points'

const store = configureStore({
    reducer:{
        points:pointsReducer,
    }
})

describe('mainButton', () => {

    it('test if mainButton has button xd',() => {
        render(
            <Provider store={store}>
                    <MainButton/>
            </Provider>
        )

        const btn = screen.getByRole('button').textContent;
        expect(btn).toEqual('Score 0')
        
    })
})
  