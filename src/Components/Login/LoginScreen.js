import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import postLogin from "../../PostRequest/postLogin";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      passwortHash: "",
      visible: true,
      Fehler: false,
      Abgemeldet: false,
      Eingelogt: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.abmelden = this.abmelden.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const Value = target.value;

    const name = target.name;

    this.setState({ [name]: Value });
    /* this.setState({[name]: Pass}); */
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state);
    var username = this.state.username;
    var passwortHash = this.state.passwortHash;

    postLogin
      .sendnewLogin({ username, passwortHash })
      .then((res) => {
        console.log(res);
        this.setState({
          visible: false,
          Eingelogt: true,
          Abgemeldet: false,
        });

        this.setState({ Fehler: false });
        sessionStorage.setItem("token", res.data);
        sessionStorage.setItem("NutzerName", this.state.username);
        sessionStorage.setItem("NutzerEingabe", true)
        sessionStorage.setItem("AllgemeinLogin", false);
        sessionStorage.setItem("LoginFehler", false);

        sessionStorage.removeItem("LoginFehler");
        sessionStorage.removeItem("LoginNutzerName");

        console.log(res.data);
        window.location.reload();
      })
      .catch(
        (error) => (
          sessionStorage.setItem("LoginFehler", true),
          sessionStorage.setItem("LoginNutzerName", this.state.username),
          window.location.reload()
        )
      );

    /* console.log("Ergebnisse: ");
    console.log(this.state.Benutzername);
    console.log(this.state.Passwort); */
  }

  componentDidMount() {
    var Nutzername;
    var FehlerSession;
    FehlerSession = sessionStorage.getItem("LoginFehler");
    this.setState({ Fehler: FehlerSession });
    Nutzername = sessionStorage.getItem("LoginNutzerName");
    this.setState({ username: Nutzername });
    var Token = sessionStorage.getItem("token");
    var generiert = sessionStorage.getItem('Generiert')
    var NutzerEingabe = sessionStorage.getItem("NutzerEingabe")
    console.log(NutzerEingabe);
    if(generiert !== null){
    if(Token === null || generiert){
      this.setState({
        visible: true,
        Eingelogt: false
      })
    }}
    if(NutzerEingabe !== null){
    if(Token !== null && NutzerEingabe){this.setState({
      visible: false,
      Eingelogt: true,
    })}}
    
    /* if (Token !== null) {
      if(generiert == true){
      this.setState({
        visible: true,
        Eingelogt: false,
      });
    }else{
      this.setState({
        visible: false,
        Eingelogt: true,
      })
    }
  } */
    var Abgelemdet;
    Abgelemdet = sessionStorage.getItem("Abmeldung");
   
    if (Abgelemdet !== null) {
      this.setState({
        Abgemeldet: true,
        visible: true,
        Eingelogt: false,
        username: "",
        passwortHash: "",
      });
      sessionStorage.removeItem("Abmeldung");
    }
  }

  abmelden() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("NutzerName");
    sessionStorage.removeItem("NutzerEingabe");

    this.setState({
      Abgemeldet: true,
      visible: true,
      Eingelogt: false,
      username: "",
      passwortHash: "",
    });
    sessionStorage.setItem("Abmeldung", true);
    window.location.reload();
  }

  render() {
    const RegistrierenLink = "/Registrieren";
    const AdminLink = "/AdminControl";
    const Startseite = "/";
    const ProfilLink = "/Profil";

    return (
      <div>
        {this.state.Abgemeldet ? (
          <div>
            <div className="Erfolgreich">
              {" "}
              <div className="DESIGNHeadline3">Sie haben sich abgemeldet </div>
            </div>

            <div className="LoginLinks">
              <Link className="DESIGNButton" to={Startseite}>
                Startseite
              </Link>
            </div>
          </div>
        ) : null}
        {this.state.Fehler ? (
          <div className="AnmeldungFehler">
            {" "}
            <div className="DESIGNHeadline3">
              Leider gab es einen Fehler bei der Anmeldung, bitte versuchen Sie
              es erneut
            </div>
          </div>
        ) : null}
        {this.state.visible ? (
          <div className="LogInField">
            <form className="FormFenster" onSubmit={this.handleSubmit}>
              <br />
              <div className="InputField">
                <label>
                  <input
                    className="InputTextField"
                    placeholder="Benutzername"
                    name="username"
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  <input
                    className="InputTextField"
                    placeholder="Passwort"
                    name="passwortHash"
                    type="password"
                    value={this.state.passwortHash}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <br />
              <div className="SubmitField">
                <input
                  className="DESIGNButton"
                  type="submit"
                  value=" Einloggen"
                />
                <br />
                <Link className="DESIGNButton" to={RegistrierenLink}>
                  Neu re­gis­t­rie­ren
                </Link>
              </div>
            </form>
          </div>
        ) : null}

        {this.state.Eingelogt ? (
          <div>
            <div className="Erfolgreich">
              {" "}
              <div className="DESIGNHeadline3">
                Sie haben sich erfolgreich angemeldet{" "}
              </div>
            </div>
            <div className="LoginLinks">
              <Link className="DESIGNButton" to={Startseite}>
                Startseite
              </Link>

              <Link className="DESIGNButton" to={AdminLink}>
                Admin
              </Link>

              <Link className="DESIGNButton" to={ProfilLink}>
                Profilübersicht
              </Link>
              <button className="DESIGNButton" onClick={this.abmelden}>
                Abmelden
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default LoginScreen;
