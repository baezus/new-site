import 'bulma/css/bulma.min.css';
import { useRoutes, A, navigate, useRedirect } from 'hookrouter';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import NoPageFound from './components/NoPageFound';
import Welcome from './components/Welcome';
import Nav from './components/Nav';

export default function App() {
    const routes = {
        "/": () => <Welcome />,
        "/resume": () => <Resume />,
        "/contact": () => <Contact />,
        "/portfolio": () => <Portfolio />,
        "/no-page-found": () => <NoPageFound />
    };

    const routeResult = useRoutes(routes);
    let r = ""
    if (routeResult){
        r = routeResult.type.name;
        let actual = "/" + r.toString().toLowerCase();
        console.log("actual: " + actual);
    }
    return (
        <div className="App">
            <div className="nav">
                <Nav/>
                <>
                { routeResult }
                </>
            </div>
        </div>
    )
}
