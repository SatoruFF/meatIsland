import { PATHS } from "../constants/paths";
import CatalogPage from "../features/Catalog";
import HomePage from "../features/Home";

interface IRoute {
  path: string;
  element: React.FC;
}

type IRoutes = Array<IRoute>;

export const privateRoutes: IRoutes = [
  {
    path: PATHS.WELCOME_PATH,
    element: HomePage,
  },
  {
    path: PATHS.CATALOGS_PATH,
    element: CatalogPage,
  },
];
