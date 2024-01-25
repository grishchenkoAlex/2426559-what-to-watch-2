import {useMemo} from 'react';
import {ALL_GENRES} from 'src/constants';
import {useAppSelector} from 'src/store/hooks';
import {GenreSelector} from 'src/store/genre/selectors';
import {FilmsSelector} from 'src/store/films/selectors';

export function useFiltredFilms() {
  const genre = useAppSelector(GenreSelector.genre);
  const films = useAppSelector(FilmsSelector.list); return useMemo(() => {
    if (!films) {
      return null;
    }
    if (genre === ALL_GENRES) {
      return films;
    } else {
      return films.filter((film) => film.genre === genre);
    }
  }, [genre, films]);
}
