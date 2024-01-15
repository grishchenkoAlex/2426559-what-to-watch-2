import { FilmCardData } from 'src/types';

type Props = FilmCardData

export function FilmCard(props: Props) {
    const {
        preview,
        title
    } = props;
    return(
<article
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <img src={preview} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={`/`}>
          {title}
        </a>
      </h3>
    </article>
    );
}