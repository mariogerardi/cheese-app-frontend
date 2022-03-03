import { useState } from "react";
import {Link} from "react-router-dom"

function Cheese(props) {
    const [newForm, setNewForm] = useState({
        name: "",
        countryOfOrigin: "",
        image: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createCheese(newForm);
        setNewForm({
            name: "",
            countryOfOrigin: "",
            image: "",
        });
    };
  // loaded function
  const loaded = () => {
    return props.cheese.map((individualCheese) => (
      <div key={individualCheese._id} className="individualCheese cheesebox">
      <Link to={`/cheese/${individualCheese._id}`}>
      <img src={individualCheese.image} alt={individualCheese.name} />
      </Link>
      <Link to={`/cheese/${individualCheese._id}`}>
      <div className="cheeseText">
        <h1>{individualCheese.name}</h1>
        <h3>{individualCheese.countryOfOrigin}</h3>
      </div>
      </Link>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Please wait patiently for the cheese to arrive...</h1>;
  };
  return (
    <section>
        <form onSubmit={handleSubmit}>
            <h1 className="intro">Welcome to <em>Cheese App!</em></h1>
            <input
                type="text"
                value={newForm.name}
                name="name"
                placeholder="Name"
                onChange={handleChange}
            />
            <input
                type="text"
                value={newForm.image}
                name="image"
                placeholder="Image URL"
                onChange={handleChange}
            />
            <input
                type="text"
                value={newForm.countryOfOrigin}
                name="countryOfOrigin"
                placeholder="Country of Origin"
                onChange={handleChange}
            />
            <input class="submitbutton" type="submit" value="Create Cheese!" />
        </form>
        {props.cheese ? loaded() : loading()}
    </section>
);
}

export default Cheese;