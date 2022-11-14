import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component: Component }, index) => (
          <Route path={path} element={<Component />} key={index} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
