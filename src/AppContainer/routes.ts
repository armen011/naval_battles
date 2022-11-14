import StartPage from "../pages/StartPage";
import GamePage from "../pages/GamePage";
import ResultPage from "../pages/ResultPage";

export const routes = [
  {
    path: "/",
    component: StartPage,
  },
  {
    path: "/game",
    component: GamePage,
  },
  {
    path: "/result",
    component: ResultPage,
  },
];
