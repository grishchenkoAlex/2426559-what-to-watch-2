import {Header} from 'src/components/header';
import {Footer} from 'src/components/footer';
import {FilmsList} from 'src/components/films-list';
import {FilmCardData} from 'src/types';

type Props = {
  films: FilmCardData[]
}

export function MyList({films}: Props) {
  return (
    <div className="user-page">
      <Header />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films}/>
      </section>
      <Footer />
    </div>
  );
}
