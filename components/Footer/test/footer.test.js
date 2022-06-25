import { render, screen } from "@testing-library/react";
import Footer from '../Footer'
import { Provider } from 'react-redux'
import userReducer from "../../../redux/store/user";
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer:{
        user:userReducer,
    }
})

describe('Choose', () => {

    it('test if footer has image and button',() => {
        render(
        <Provider store={store}>
            <Footer normal={false} display={true}/>
        </Provider>)
        
        const img = screen.getByRole('img');
        const btn = screen.getByRole('button');
        expect(img).toBeInTheDocument()
        expect(btn).toBeInTheDocument()

    })
  })
  