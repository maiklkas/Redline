import {NavBar} from "./components/navbar";
import {useRoutes} from "./routs/routs";
import {BrowserRouter as Router} from 'react-router-dom';
import {FooterHome} from "./components/footer";



function App() {
    const routes = useRoutes(false)
    return (

        <Router>
            <NavBar/>
            {routes}
            <FooterHome/>
        </Router>

    );
}

export default App;

