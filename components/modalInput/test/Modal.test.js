import { render, screen } from "@testing-library/react";
import ModalInput from '../ModalInput'
import { Provider } from 'react-redux'
import userReducer from "../../../redux/store/user";
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer:{
        user:userReducer,
    }
})

describe('ModalInput', () => {

    it('test if modalInput has button  ',() => {
        render(
            <Provider store={store}>
                <ModalInput/>
            </Provider>)
        
        const container = screen.getByRole('button').textContent;
        expect(container).toBe('Add player ')

    })
})