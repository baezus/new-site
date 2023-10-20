import Welcome from "./components/Welcome"
import ControlledForm from "./components/ControlledForm"
import 'bulma/css/bulma.min.css';

export default function App() {
    return (
        <div className="main">
        <Welcome/>
        <ControlledForm/>
        </div>
    )
}
