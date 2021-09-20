import { BrowserRouter, Switch, Route} from "react-router-dom";
import { Header } from "../components/atoms/layout/Header";
import { Home } from "../components/pages/Home"
import { Buttle } from "../components/pages/Buttle";
import { Result } from "../components/pages/Result";

export const Router=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/buttle">
                    <Header />
                    <Buttle />
                </Route>
                <Route path="/result">
                    <Header />
                    <Result />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}