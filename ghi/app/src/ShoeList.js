import React from "react"
import { Link } from "react-router-dom"


function ShoeList(props) {
    // get the shoe with an id
    const handleRemoveShoe = async (id) => {
        // remove the shoe with the delete method and headers
        // use fetchConfig from fearless frontend as a guide
        fetch(`http://localhost:8080/api/shoes/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            window.location.reload()
        })

    }
    return (
        <div className="table-responsive">
            <table className="table table-shadow table-striped" >
                <thead>

                    <tr>
                        <th className="text-center ">Manufacturer</th>
                        <th className="text-center">Model Name</th>
                        <th className="text-center">Color</th>
                        <th className="text-center">Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {props.shoes.map(shoe => {
                        return (
                            <tr key={shoe.bin.id}>
                                <td className="text-center"><strong>{shoe.manufacturer}</strong></td>
                                <td className="text-center">{shoe.model_name}</td>
                                <td className="text-center">{shoe.color}</td>
                                <td className="text-center"><img src={shoe.picture_url} alt="" width="50%" height="30%" /></td>
                                <td><button onClick={() => handleRemoveShoe(shoe.id)} type="button" className="btn btn-outline-danger">Remove Shoe</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div>
                <Link to="/shoes/new">
                    <button type="button" className="btn btn-primary">Add New Shoes</button>
                </Link>
            </div>
        </div>
    )
}

export default ShoeList
    // Include:
    // manufacturer = models.CharField(max_length=50)
    // model_name = models.CharField(max_length=50)
    // color = models.CharField(max_length=50)
    // picture_url = models.URLField(null=True, blank=True)