
import { store } from 'src/store/index';


export type AppDispatch = typeof store.dispatch;

export type State = {
    genre: string,
    
}
