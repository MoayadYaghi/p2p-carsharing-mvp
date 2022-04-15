import React from "react";
import MoviesSlider from "./Slider";
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
                {/* <MoviesSlider key={name} images={photo} text={name} id={id} /> */}
            </div>
        );
    }
}
export default SliderCall;
