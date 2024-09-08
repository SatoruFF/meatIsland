import { PATHS } from "../constants/paths";
import HomePage from "../features/Home";

interface IRoute {
  path: string;
  element: React.FC;
}

type IRoutes = Array<IRoute>;

export const publicRoutes: IRoutes = [
  {
    path: PATHS.WELCOME_PATH,
    element: HomePage,
  },
];
