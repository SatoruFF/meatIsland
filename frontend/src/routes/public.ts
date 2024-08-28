import { PATHS } from "../constants/paths";
import Certificates from "../features/Home/components/Certificates/Certificates";
import Contacts from "../features/Home/components/Contacts/Contacts";
import HomePage from "../features/Home";
import Reviews from "../features/Home/components/Reviews/Review";

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
  {
    path: PATHS.REVIEWS,
    element: Reviews,
  },
  {
    path: PATHS.CERTIFICATES,
    element: Certificates,
  },
  {
    path: PATHS.CONTACTS,
    element: Contacts,
  },
];
