import '../styles/globals.css'
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit"
import pointsReducer from "../redux/store/points"
import userReducer from "../redux/store/user";
import selectedReducer from "../redux/store/selected";

const store = configureStore({
    reducer:{
        points:pointsReducer,
        user:userReducer,
        selected:selectedReducer
    }
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
