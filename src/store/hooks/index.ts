import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, State } from '../types';
export { useFetchFilm } from 'src/hooks/use-fetch-film';
export { usePlayer } from '../../hooks/use-player';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
