import React from "react";
import CarSlider from "./Slider";
import CarsList from "../../Assets/Cars/response.json"

var photo = [];
var name = [];
var id = [];
var location = [];
var price = [];

class SliderCall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [],
        };
    }

    componentDidMount() {
        if (CarsList.length !== 0) {
            const cars = Object.values(CarsList)[0]
            this.setState({ cars: cars });
        }
    }

    render() {
        this.state.cars.forEach((element) => {
            photo.push(element.image);
            name.push(element.modelName);
            id.push(element.id);
            location.push(element.location);
            price.push(element.price);
        });
        return (
            <div>
                <CarSlider images={photo} text={name} id={id} location={location} price={price} />
            </div>
        );
    }
}
export default SliderCall;