import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import postRegister from "../../PostRequest/postRegister";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

class Anmeldung extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      Anrede: "",
      vorname: "",
      nachname: "",
      username: "",
      alter: "",
      passwortHash: "",
      Passwort2: "",
      preiskategorie: "",
      lieblingszone: "",
      newsletter: false,
      rechte: "USER",
      BG1: "Box",
      BG2: "Box",
      BG3: "Box",
      BG4: "Box",
      BG5: "Box",
      BG6: "Box",
      BG7: "Box",
      BG8: "Box",
      BG9: "Box",
      visible: true,
      Fehler: false,
      passwortÜber: false,
      passwortÜberLänge: false,
      passwortButtonShow: "password",
      EmailSupport: false,
      Felder: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showPass = this.showPass.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const Value = target.value === "on" ? true : target.value;

    const name = target.name;

    this.setState({ [name]: Value });
    /* this.setState({[name]: Pass}); */
  }
  componentDidMount(){
    scroll.scrollToTop()
  }

  handleSubmit(event) {
    event.preventDefault();
    setInterval(scroll.scrollToTop(), 1500);
    var MailContent = this.state.email;
    var Mailcontent1 = MailContent.includes("@");
    var Mailcontent133 = MailContent.startsWith("@");
    var Mailcontent166 = MailContent.endsWith("@");
    var Mailcontent2 = MailContent.includes(".");
    var Mailcontent233 = MailContent.startsWith(".");
    var Mailcontent266 = MailContent.endsWith(".");

    if (
      this.state.email === "" ||
      this.state.passwortHash === "" ||
      this.state.vorname === "" ||
      this.state.nachname === "" ||
      this.state.username === "" ||
      this.state.preiskategorie === "" ||
      this.state.lieblingszone === ""
    ) {
      this.setState({ Felder: true });
    } else {
      console.log(this.state);
      if (Mailcontent1 && !Mailcontent133 && !Mailcontent166) {
        if (Mailcontent2 && !Mailcontent233 && !Mailcontent266) {
          this.setState({ EmailSupport: false });
          var PassContent;
          var PassContent1 = this.state.passwortHash.includes("1");
          var PassContent2 = this.state.passwortHash.includes("2");
          var PassContent3 = this.state.passwortHash.includes("3");
          var PassContent4 = this.state.passwortHash.includes("4");
          var PassContent5 = this.state.passwortHash.includes("5");
          var PassContent6 = this.state.passwortHash.includes("6");
          var PassContent7 = this.state.passwortHash.includes("7");
          var PassContent8 = this.state.passwortHash.includes("8");
          var PassContent9 = this.state.passwortHash.includes("9");
          var PassContent0 = this.state.passwortHash.includes("0");
          if (
            PassContent0 ||
            PassContent1 ||
            PassContent2 ||
            PassContent3 ||
            PassContent4 ||
            PassContent5 ||
            PassContent6 ||
            PassContent7 ||
            PassContent8 ||
            PassContent9
          ) {
            PassContent = true;
          } else {
            PassContent = false;
          }

          if (this.state.passwortHash.length >= 8 && PassContent) {
            this.setState({ passwortÜberLänge: false });


            if (this.state.passwortHash !== this.state.Passwort2) {
              this.setState({
                passwortÜber: true,
                passwortHash: "",
                Passwort2: "",
                Fehler: false,
              });
            } else {
              this.setState({ passwortÜber: false });


              postRegister
                .sendnewRegister(this.state)
                .then((res) => {
                  this.setState({ visible: false });
                })
                .catch((error) => {
                  this.setState({ Fehler: true });
                  var Err = error.sub;
                });
            }
          } else {
            this.setState({
              passwortÜberLänge: true,
            });
          }
        } else {
          this.setState({
            error: false,
            visible: true,
            Fehler: false,
            EmailSupport: true,
            passwortÜberLänge: false,
          });
        }
      } else {
        this.setState({
          error: false,
          visible: true,
          Fehler: false,
          EmailSupport: true,
          passwortÜberLänge: false,
        });
      }
    }
  }

  BoxAuswahl(Eingabe, Daten) {
    this.setState({ lieblingszone: Daten });

    this.setState({ BG1: "Box" });
    this.setState({ BG2: "Box" });
    this.setState({ BG3: "Box" });
    this.setState({ BG4: "Box" });
    this.setState({ BG5: "Box" });
    this.setState({ BG6: "Box" });
    this.setState({ BG7: "Box" });
    this.setState({ BG8: "Box" });
    this.setState({ BG9: "Box" });

    if (Eingabe === 1) {
      this.setState({ BG1: "BoxH" });
    }
    if (Eingabe === 2) {
      this.setState({ BG2: "BoxH" });
    }
    if (Eingabe === 3) {
      this.setState({ BG3: "BoxH" });
    }
    if (Eingabe === 4) {
      this.setState({ BG4: "BoxH" });
    }
    if (Eingabe === 5) {
      this.setState({ BG5: "BoxH" });
    }
    if (Eingabe === 6) {
      this.setState({ BG6: "BoxH" });
    }
    if (Eingabe === 7) {
      this.setState({ BG7: "BoxH" });
    }
    if (Eingabe === 8) {
      this.setState({ BG8: "BoxH" });
    }
    if (Eingabe === 9) {
      this.setState({ BG9: "BoxH" });
    }
  }

  showPass() {
    if (this.state.passwortButtonShow === "password") {
      this.setState({ passwortButtonShow: "text" });
    } else {
      this.setState({ passwortButtonShow: "password" });
    }
    setTimeout(() => {
      this.setState({
        passwortButtonShow: "password",
      });
    }, 5000);
  }

  render() {
    const LogInLink = "/Login";
    const Startseite = "/";

    return (
      <div>
        {this.state.Felder ? (
          <div className="AnmeldungFehler">
            <div className="DESIGNHeadline3">
              Bitte füllen Sie alle Felder aus
            </div>
          </div>
        ) : null}

        {this.state.passwortÜberLänge ? (
          <div className="AnmeldungFehler">
            <div className="DESIGNHeadline3">
              Bitte überprüfen Sie ob alle Anforderungen an ihr Passwort
              bestätigt sind{" "}
            </div>
          </div>
        ) : null}
        {this.state.EmailSupport ? (
          <div className="AnmeldungFehler">
            <div className="DESIGNHeadline3">
              Bitte geben Sie eine korrekte EMail Adresse ein
            </div>
          </div>
        ) : null}
        {this.state.passwortÜber ? (
          <div className="AnmeldungFehler">
            <div className="DESIGNHeadline3">
              Die Passwörter stimmen nicht überein, bitte versuchen Sie es
              erneut
            </div>
          </div>
        ) : null}

        {this.state.Fehler ? (
          <div className="AnmeldungFehler">
            {" "}
            <div className="DESIGNTextField">
              Ihre Anmeldung war fehlerhaft, bitte überprüfen Sie ihre Eingaben
            </div>
          </div>
        ) : null}

        <br />
        {this.state.visible ? (
          <form className="FormFenster" onSubmit={this.handleSubmit}>
            <div className="InputField">
              {/* <label>
              <select
                className="Textfielde"
                value={this.state.value}
                onChange={this.handleChange}
                name="Anrede"
              >
                <option value="PreisKategorie">Anrede Auswählen</option>
                <option value="Herr">Herr</option>
                <option value="Frau">Frau</option>
                <option value="Divers">Divers</option>
                
              </select>
            </label> */}

              <div className="Zusammenhängend">
                <label>
                  <input
                    className="Textfieldd"
                    placeholder="Vorname"
                    name="vorname"
                    type="text"
                    value={this.state.vorname}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  <input
                    className="Textfieldd"
                    placeholder="Nachname"
                    name="nachname"
                    type="text"
                    value={this.state.nachname}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <label>
                <input
                  className="Textfielde"
                  placeholder="E-Mail Adresse"
                  name="email"
                  type="text"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>

              <label>
                <input
                  className="Textfielde"
                  placeholder="Benutzername"
                  name="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <input
                  className="Textfielde"
                  placeholder="Passwort"
                  name="passwortHash"
                  type={this.state.passwortButtonShow}
                  value={this.state.passwortHash}
                  onChange={this.handleChange}
                />
              </label>

              <label>
                <input
                  className="Textfielde"
                  placeholder="Passwort Wiederholen"
                  name="Passwort2"
                  type={this.state.passwortButtonShow}
                  value={this.state.Passwort2}
                  onChange={this.handleChange}
                />
              </label>
              <div className="PasswortInfo">
                <div className="DESIGNTextField">
                  Das Passwort muss aus mindestens 8 Zeichen bestehen und eine
                  Zahl beinhalten
                  <br />
                </div>{" "}
              </div>
              <div className="ButtonPasswortDiv">
                <div className="DESIGNButton" onClick={this.showPass}>
                  <div className="ButtonPasswort">Show Password</div>
                </div>
              </div>
              <label>
                <select
                  className="Textfielde"
                  value={this.state.preiskategorie}
                  onChange={this.handleChange}
                  name="preiskategorie"
                >
                  <option value="default">Preis Kategorie Auswählen</option>
                  <option value="ERWACHSENER">Erwachsener</option>
                  <option value="STUDIEREND">Student</option>
                  <option value="KIND">Kind</option>
                  <option value="SENIOR">Senior</option>
                  <option value="MENSCH_MIT_BEHINDERUNG">
                    Mensch mit Behinderung
                  </option>
                  <option value="BEGLEITPERSON">Begleitperson</option>
                </select>
              </label>

              <div className="SitzplatzAuswahl">
                <div className="DESIGNHeadline3">
                  {" "}
                  Bitte Wählen sie eine favorisierten Sitzplatz Region aus
                </div>

                <div className="Leinwand">
                  <div className="DESIGNHeadline3">Kino Leinwand</div>
                </div>
                <div className="FlexboxDesign">
                  <div
                    className={this.state.BG1}
                    onClick={() => this.BoxAuswahl(1, "VORNE_LINKS")}
                  >
                    Vorne Links
                  </div>
                  <div
                    className={this.state.BG2}
                    onClick={() => this.BoxAuswahl(2, "VORNE_MITTE")}
                  >
                    Vorne Mitte
                  </div>
                  <div
                    className={this.state.BG3}
                    onClick={() => this.BoxAuswahl(3, "VORNE_RECHTS")}
                  >
                    Vorne Rechts
                  </div>
                </div>
                <div className="FlexboxDesign">
                  <div
                    className={this.state.BG4}
                    onClick={() => this.BoxAuswahl(4, "MITTE_LINKS")}
                  >
                    Mitte &nbsp;Links
                  </div>
                  <div
                    className={this.state.BG5}
                    onClick={() => this.BoxAuswahl(5, "MITTE_MITTE")}
                  >
                    Mitte{" "}
                  </div>
                  <div
                    className={this.state.BG6}
                    onClick={() => this.BoxAuswahl(6, "MITTE_RECHTS")}
                  >
                    Mitte Rechts
                  </div>
                </div>
                <div className="FlexboxDesign">
                  <div
                    className={this.state.BG7}
                    onClick={() => this.BoxAuswahl(7, "HINTEN_LINKS")}
                  >
                    Hinten Links
                  </div>
                  <div
                    className={this.state.BG8}
                    onClick={() => this.BoxAuswahl(8, "HINTEN_MITTE")}
                  >
                    Hinten Mitte
                  </div>
                  <div
                    className={this.state.BG9}
                    onClick={() => this.BoxAuswahl(9, "HINTEN_RECHTS")}
                  >
                    Hinten Rechts
                  </div>
                </div>
              </div>
            </div>
            <div className="newsletterField">
              <label>
                <div className="DESIGNTextField">
                  <input
                    name="newsletter"
                    type="checkbox"
                    checked={this.state.newsletter}
                    onChange={this.handleChange}
                  />
                  &ensp; Ich möchte den Newsletter abonnieren
                </div>
              </label>
            </div>
            <br />
            <div className="SubmitField">
              <input
                className="DESIGNButton"
                type="submit"
                value=" Registrieren"
              />
            </div>
          </form>
        ) : (
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

              <Link className="DESIGNButton" to={LogInLink}>
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Anmeldung;
