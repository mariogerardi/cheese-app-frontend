import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Cheese from "../pages/Cheese";
import Show from "../pages/Show";

function Main(props) {
    const [cheese, setCheese] = useState(null);

    const URL = "https://cheese-app-time.herokuapp.com/cheese/";

    const getCheese = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setCheese(data);
    };

    const createCheese = async (individualCheese) => {
        // make post request to create people
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
        body: JSON.stringify(individualCheese),
        });
        // update list of people
        getCheese();
    };

    const updateCheese = async (person, id) => {
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(person),
        })
        getCheese()
    }

    const deleteCheese = async id => {
        await fetch(URL + id, {
            method: "delete",
            })
        getCheese()
    }

    useEffect(() => getCheese(), []);

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Cheese cheese={cheese} createCheese={createCheese} />
                </Route>
                <Route
                    path="/cheese/:id"
                    render={rp => (
                        <Show
                            cheese={cheese}
                            updateCheese={updateCheese}
                            deleteCheese={deleteCheese}
                            {...rp}
                        />
                    )}
                />
            </Switch>
        </main>
    );
}

export default Main;