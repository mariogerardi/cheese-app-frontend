import { useState } from "react"

function Show(props) {
    const id = props.match.params.id
    const cheese = props.cheese
    const individualCheese = cheese.find(p => p._id === id)

    const [editForm, setEditForm] = useState(individualCheese)

    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.updateCheese(editForm, individualCheese._id)
        props.history.push("/")
    }

    const removeCheese = () => {
        props.deleteCheese(individualCheese._id)
        props.history.push("/")
    }

    return (
        <section className="showsection">
            <div key={individualCheese._id} className="individualCheese showcheesebox">
                <img className="showImage" src={individualCheese.image} alt={individualCheese.name} />
                <div className="cheeseText">
                    <h1>{individualCheese.name}</h1>
                    <h3>{individualCheese.countryOfOrigin}</h3>
                </div>
            </div>
            <form className="updateForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="Cheese name"
                    onChange={handleChange}
                    className="showInput"
                />
                <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="Image URL"
                    onChange={handleChange}
                    className="showInput"
                />
                <input
                    type="text"
                    value={editForm.countryOfOrigin}
                    name="countryOfOrigin"
                    placeholder="Country of origin"
                    onChange={handleChange}
                    className="showInput"
                />
                <div>
                    <input className="showsubmitbutton" type="submit" value="Update Cheese" />
                    <button className="deletebutton" id="delete" onClick={removeCheese}>Remove Cheese</button>
                </div>
            </form>
        </section>
    )
}

export default Show