import React from "react"
import "./index.css"

function ShoeList(props) {
    return (
        <table className="table table-striped">
            <thead>
                
                <tr>
                    <th>Manufacturer</th>
                    <th>Model Name</th>
                    <th>Color</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {props.shoes.map(shoe => {
                    return (
                        <tr key={shoe.bin.id}>
                            <td>{shoe.manufacturer}</td>
                            <td>{shoe.model_name}</td>
                            <td>{shoe.color}</td>
                            <td>{shoe.picture_url}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}    

export default ShoeList
    // Include:
    // manufacturer = models.CharField(max_length=50)
    // model_name = models.CharField(max_length=50)
    // color = models.CharField(max_length=50)
    // picture_url = models.URLField(null=True, blank=True)