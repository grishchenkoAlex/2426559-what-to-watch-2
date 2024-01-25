import {Link} from 'react-router-dom';
import { RoutePathname } from 'src/constants';
import './error-page.css';

export function ErrorPage() {
  return (
    <div className="page404">
      <h1>404 - Страница не найдена</h1>
      <p>Извините, запрашиваемая страница не найдена.</p>
      <Link to={RoutePathname.main} className="link">
                Перейти на главную
      </Link>
    </div>
  );
}
