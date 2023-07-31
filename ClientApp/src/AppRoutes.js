import { Home } from "./components/Home";
import {ParseHeader} from "./components/ParseHeader";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path:"/parseHeader",
    element:<ParseHeader/>
  }
];

export default AppRoutes;
