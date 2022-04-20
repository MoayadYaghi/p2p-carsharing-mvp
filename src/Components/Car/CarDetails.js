import React, { Component } from "react";
import Cars from "../../Assets/Cars/response.json";
import "./CarDetails.scss";
import { Navigate } from "react-router-dom";

class CarDetails extends React.Component {
  carsIds = Object.values(Cars.cars).map((car) => car.id)

  constructor(props) {
    super(props);
    console.log(this.carsIds)

    let wholeWeek = [];
    let today = new Date();
    let weekDay = today.getDay();
    let add = 0;
    for (let i = 0; i < 6; i++) {
      let monat = today.getMonth() + 1;

      let day = today.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      if (monat < 10) {
        monat = "0" + monat;
      }
      let date = day + "." + monat + "." + today.getFullYear();

      add = 1;
      today.setDate(today.getDate() + add);
      wholeWeek.push(date);
    }

    this.state = {
      car: "",

      image: "",

      vorstellungen: [],
      weekDates: wholeWeek,
      weekDay: weekDay,
      clickedVorstellung: null,
      nextButton: "",
      redirect: false,
    };
    this.showNext = this.showNext.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
  }
  
  componentDidMount() {
    let url = window.location.href;
    // console.log(window.location.href);
    let carId = url.split("/")[3];
    if (this.carsIds.includes(carId)) {
        console.log(url)
        console.log(carId)
    }

    // CarById;
    // FilmById.filmById(filmId).then((response) => {
    //   this.setState({ film: response.data });
    // });
    // VorstellungByFilm.vorstellungByFilm(filmId).then((response) => {
    //   console.log(response);

    //   let vorstellungenNaechsteWoche = [];
    //   let alleVorstellungenAktiv = [];
    //   let dat;
    //   for (let vorstellung in response.data) {
    //     let startZeit = response.data[vorstellung].startZeit;
    //     let split = startZeit.split("-");
    //     let jahr = split[0];
    //     let monat = split[1];
    //     let day = split[2].split("T")[0];
    //     let uhrzeit = split[2].split("T")[1].split(".")[0];

    //     let datum = day + "." + monat + "." + jahr;
    //     for (dat in this.state.weekDates) {
    //       if (this.state.weekDates[dat] == datum) {
    //         alleVorstellungenAktiv.push({
    //           datum: datum,
    //           uhrzeit: uhrzeit,
    //           kinosaalId: response.data[vorstellung].saal.id,
    //           vorstellungId: response.data[vorstellung].id,
    //         });
    //       }
    //     }
    //   }
    //   for (dat in this.state.weekDates) {
    //     let vorst;
    //     let vorstellungZuDatum = [];
    //     for (vorst in alleVorstellungenAktiv) {
    //       if (
    //         this.state.weekDates[dat] == alleVorstellungenAktiv[vorst].datum
    //       ) {
    //         vorstellungZuDatum.push({
    //           uhrzeit: alleVorstellungenAktiv[vorst].uhrzeit,
    //           kinosaalId: alleVorstellungenAktiv[vorst].kinosaalId,
    //           vorstellungId: alleVorstellungenAktiv[vorst].vorstellungId,
    //         });
    //       }
    //     }
    //     vorstellungenNaechsteWoche.push({
    //       datum: this.state.weekDates[dat],
    //       vorstellung: vorstellungZuDatum,
    //     });
    //   }
    //   this.setState({ vorstellungen: vorstellungenNaechsteWoche });
    // });
  }

  showNext(event) {
    // this.setState({ clickedVorstellung: event.target.id });
    // this.setState({ nextButton: "True" });
  }

  setRedirect = (event) => {
    this.setState({ redirect: true });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
        // Link to payment page
      return <Navigate to={`/Sitzplatz/${this.state.clickedVorstellung}`} />;
    }
  };

  render() {
    return (
      <div>
        <h1 className="header"> {this.state.car.name} </h1>
        <div className="wrapper">
          <div className="inhalt">
            {/* <img alt=" " className="bild" src={this.state.car.image} /> */}
            <div>
              {/* <div className="beschreibung">
                {" "}
                {this.state.car.description}{" "}
              </div> */}

              {/* <h1 className="vorstellungen"> Vorstellungen </h1> */}
              {/* <div className="VorstellungWrapper">
                <div className="Woche">
                  {this.state.vorstellungen.map((daten) => (
                    <div className="vorstWrapper" key={daten.datum}>
                      <h2 className="Datum" key={daten.datum}>
                        {" "}
                        {daten.datum}{" "}
                      </h2>
                      {daten.vorstellung.map((vorstellung) => (
                        <div className="vorstButton">
                          <button
                            key={vorstellung.vorstellungId}
                            id={vorstellung.vorstellungId}
                            onClick={this.showNext}
                          >
                            {vorstellung.uhrzeit}
                          </button>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div> */}
              <div className="nextButtonWrapper">
                {this.renderRedirect()}
                <button
                  className="nextButton"
                  onClick={this.setRedirect}
                  disabled={!this.state.nextButton}
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CarDetails;
