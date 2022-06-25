import { useDispatch } from 'react-redux'
import { add } from '../redux/store/user';
import { useEffect} from "react";
import { state } from '../redux/store/points';

const SetUser = () => {
    const dispath = useDispatch()

    useEffect(()=> {
  
        const userSaved = localStorage.getItem('user')
         const initialUser = JSON.parse(userSaved)
      
        const pointsSaved = localStorage.getItem('point')
         const initialPoint = JSON.parse(pointsSaved)
      
        if(initialUser) {
             dispath(add(initialUser))
        }
        
        if(initialPoint) {
            dispath(state(initialPoint))
        }
          
        },[dispath])
  
}

export default SetUser