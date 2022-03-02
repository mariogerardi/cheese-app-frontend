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
      <div key={individualCheese._id} className="individualCheese">
        <Link to={`/cheese/${individualCheese._id}`}><h1>{individualCheese.name}</h1></Link>
        <img src={individualCheese.image} alt={individualCheese.name} />
        <h3>{individualCheese.countryOfOrigin}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
        <form onSubmit={handleSubmit}>
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
            <input type="submit" value="Create Cheese!" />
        </form>
        {props.cheese ? loaded() : loading()}
    </section>
);
}

export default Cheese;