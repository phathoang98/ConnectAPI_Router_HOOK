
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeTemplate from '../src/Page/HomeTemplate'
import homeRoutes from "./Routes/routes";
import NotFound from "./Page/NotFound";


function App() {

  // ---- Render các trang bên trong HomeTemplate

  const showLayoutHome = (routes) => {

    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        )
      })
    }
  }

  return (
    <BrowserRouter>

      <Switch>

        {showLayoutHome(homeRoutes)}

        <Route path="" exact component={NotFound} />

      </Switch>

    </BrowserRouter>
  );
}

export default App;
