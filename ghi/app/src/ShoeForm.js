import React, {useState, useEffect} from "react"

function ShoeForm() {
    const [manufacturer, setManufacturer] = useState('')
    const [modelName, setModelName] = useState('')
    const [color, setColor] = useState('')
    const [pictureUrl, setPictureUrl] = useState('')
    const [bin, setBin] = useState('')
    const [bins, setBins] = useState([])

    const handleManufacturerChange = (event) => {
        const value = event.target.value
        setManufacturer(value)
    }

    const handleModelNameChange = (event) => {
        const value = event.target.value
        setModelName(value)
    }

    const handleColorChange = (event) => {
        const value = event.target.value
        setColor(value)
    }

    const handlePictureUrlChange = (event) => {
        const value = event.target.value
        setPictureUrl(value)
    }

    const handleBinChange = (event) => {
        const value = event.target.value
        setBin(value)
    }

    
    const fetchData = async () => {
        const Url = 'http://localhost:8100/api/bins/'

        const response = await fetch(Url)
        if (response.ok) {
            const data = await response.json()
            setBins(data.bins)
        }
    }
    

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {}

        data.manufacturer = manufacturer
        data.model_name = modelName
        data.color = color
        data.picture_url = pictureUrl
        data.bin = bin

        const binsUrl = "http://localhost:8080/api/shoes/"

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const response = await fetch(binsUrl, fetchConfig)
        if (response.ok) {
            const newBin = await response.json()
            console.log(newBin)

            setManufacturer('')
            setModelName('')
            setColor('')
            setPictureUrl('')
            setBin('')
        }
    }
    
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new shoe</h1>
                    <form onSubmit={handleSubmit} id="create-bin-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleManufacturerChange} value={manufacturer} placeholder="Manufacturer" required type="text" name="manufacturer" id="manufacturer" className="form-control" />
                            <label htmlFor="manufacturer">Manufacturer</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleModelNameChange} value={modelName} placeholder="Model Name" required type="text" name="model_name" id="model_name" className="form-control" />
                            <label htmlFor="model_name">Model Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleColorChange} value={color} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlePictureUrlChange} value={pictureUrl} placeholder="Picture Url" required type="text" name="picture_url" id="picture_url" className="form-control" />
                            <label htmlFor="picture_url">Picture Url</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleBinChange} value={bin} required id="bins" name="bins" className="form-select">
                                <option value="">Choose a bin</option>
                                {bins.map(bin => {
                                    return (
                                        <option key={bin.id} value={bin.id}>
                                            {bin.closet_name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>    
            </div>
        </div>

    )
}

export default ShoeForm
