import './App.css';
import Users from "./components/Users";
import AddUser from "./forms/AddUser";
import UpdateUser from "./forms/UpdateUser";
// import LifeCycle from "./components/LifeCycle";
//json-server --watch api/db.json
import Navbar from "./layout/Navbar";
import NotFound from "./pages/NotFound";
import Contribute from "./pages/Contribute";
import {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


/*
function App() {
    const test = 10;
    const isAuthor = true;
    return (
        <div className="container">
            <h1>
                test <br/> {test}
            </h1>

            <h2>{"arafat".toUpperCase()}</h2>

            <h2>{"ARAFAT".toLowerCase()}</h2>

            <h3>{1+1}</h3> <h3>1+1</h3>

            <h2>
                {
                    isAuthor ? <p>{"arafat".toUpperCase()} Kayitlidir</p>: <p>Kullanici Kayitli Degildir</p>
                }
            </h2>

            <p style={{color:"red", margin:"80px", fontSize: "30px"}}>1. Paragraf</p>
            <p className="header">2. Paragraf</p>
            <p className="container" style={{fontSize: "30px"}}>Ben Bootstrap</p>

        </div>
    );
}
*/


/*
import User from "./components/User";
function App() {
    return (
        <div className="container">
            <User/>
            <User/>
            <User/>
            <h4>Json formatinda sadece bir tane parent eleman donebiliyor. yani sadece (div, h1, form, input)</h4>
            <h4>Json formatinda html'deki gibi class id kullanilmiyor farkli halleri vardir. yani (className)</h4>
        </div>
    )
}*/


/*
import Navbar from "./components/Navbar";
import {Component} from "react";
class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>State almayacaksa ve sabit prop gibi davranacaksa function component kullanilabilir.</h1>
                <Navbar/>
            </div>
        )
    }
}
 */


/*import Navbar from "./components/Navbar";
// import User2 from "./components/User2";
// import User3 from "./components/User3";
function App() {
    return (
        <div className="container">

             <div className="container">
                 <Navbar />
                 <hr/>



                 <User3
                 name = "Arafat Emin"
                 department = "Bilgisayar Muhendisi"
                 salary = "500000"
                 />
                 <br/>


                 <User3
                 name = "Rahile Emin"
                 department = "Bilgisayar Muhendisi"
                 salary = "100000"
                 />



             </div>

        </div>
    );
}*/


// import User2 from "./components/User2";
// import User3 from "./components/User3";


/*const Home = () => {
    return (
        <h3>Home Page</h3>
    )
}
const About = () => {
    return (
        <h3>About Page</h3>
    )
}*/


class App extends Component {
// {/*<LifeCycle test = "deneme"/>*/
    render() {
        return (
            <Router>
                <div className="container">
                    <Navbar title="React App"/>
                    <hr/>

                    <Switch>
                        <Route exact path="/" component={Users}/>
                        <Route exact path="/add" component={AddUser}/>
                        <Route exact path="/github" component={Contribute}/>
                        <Route exact path="/edit/:id" component={UpdateUser}/>
                        <Route component={NotFound}/>
                    </Switch>


                </div>
            </Router>
        )
    }


}

export default App;
