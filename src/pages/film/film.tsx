import {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Header} from 'src/components/header';
import {Footer} from 'src/components/footer';
import {FilmsList} from 'src/components/films-list';
import {MyListButton, PlayButton} from 'src/components/buttons';
import {AuthorizationStatus, RoutePathname} from 'src/constants';
import {Tabs} from 'src/components/tabs';
import {fetchFilmSimilar} from 'src/store/film/api';
import {useFetchFilm} from 'src/hooks';
import {useAppDispatch, useAppSelector} from 'src/store/hooks';
import {FilmSelector} from 'src/store/film/selectors';
import {AuthorizationSelector} from 'src/store/authorization/selectors';


export function Film() {
  const {id = ''} = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(FilmSelector.film);
  const filmsSimilar = useAppSelector(FilmSelector.similar);
  const authorizationStatus = useAppSelector(AuthorizationSelector.status);
  const isAuthorized = authorizationStatus === AuthorizationStatus.authorized;
  useFetchFilm(id);
  useEffect(() => {
    dispatch(fetchFilmSimilar(id));
  }, [id, dispatch]);
  if (!film) {
    return null;
  }
  const moreLikeFilms = filmsSimilar
    ?.filter((f) => f.genre === film.genre && f.id !== film.id)
    .slice(0, 4);
  const {
    name,
    backgroundImage,
    genre,
    released,
    posterImage,
    videoLink
  } = film;
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header/>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>
              <div className="film-card__buttons">
                <PlayButton videoLink={videoLink} />
                <MyListButton filmId={id}/>
                {isAuthorized && (
                  <Link
                    to={`/${RoutePathname.films}/${id}/${RoutePathname.review}`}
                    className="btn film-card__button"
                  >
                    Add review
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
            </div>
            <div className="film-card__desc">
              <Tabs film={film}/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {moreLikeFilms && <FilmsList films={moreLikeFilms}/>}
        </section>
        <Footer/>
      </div>
    </>
  );
}
