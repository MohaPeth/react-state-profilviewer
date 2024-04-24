import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Alert } from 'react-bootstrap';

class App extends Component {
  // Définition de l'état initial du composant
  state = {
    person: {
      imgSrc: "./profil.jpg",
      fullName: "Darlyn Ndong",
      bio: "Bienvenue dans l'univers visuel où la créativité prend forme et la conception devient une expérience immersive. Je suis Darlyn NDONG, un graphiste passionné et innovant, dédié à l'art de transformer des concepts en réalités visuelles captivantes.",
      profession: "Profession: Designer"
    },
    show: false, // Un booléen pour contrôler l'affichage du profil
    timeElapsed: 0 // Un compteur pour suivre le temps écoulé
  };

  // Méthode appelée immédiatement après que le composant est monté sur le DOM (C'est ici je fais le Montage grace au componentDidMount()) 
  componentDidMount() {
    // Mise en place un intervalle qui met à jour le temps écoulé chaque seconde (MAJ)
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000);
  }

  // Méthode appelée juste avant que le composant soit démonté et détruit (pour nettoyer les ressources, c'est le démontage)
  componentWillUnmount() {
    // Nettoie l'intervalle pour éviter les fuites de mémoire
    clearInterval(this.interval);
  }

  // Méthode pour basculer l'état d'affichage du profil (on/off)
  toggleShowProfile = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    // Extraction des valeurs de l'état pour une utilisation plus facile
    const { person, show, timeElapsed } = this.state;
    return (
      <div className="App mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Card style={{ backgroundColor: '#649B88' }}>
              <Card.Body className="text-center">
                {/* Bouton pour basculer l'affichage du profil */}
                <Button variant="light" className="mb-4" onClick={this.toggleShowProfile}>
                  {/* Affichage du profil uniquement si show est vrai */}
                  {show ? 'Masquer' : 'Afficher'}
                </Button>
                {show && (
                  <div>
                    <Card.Img className="profile-image img-fluid rounded-circle mb-3 w-50" src={person.imgSrc} alt={person.fullName} />
                    <h2 className='py-2'>{person.fullName}</h2>
                    <p>{person.bio}</p>
                    <p>{person.profession}</p>
                  </div>
                )}

                {/* Affichage du temps écoulé depuis le montage du composant */}
                <Alert variant="success">
                  Temps écoulé depuis le montage : {timeElapsed} secondes
                </Alert>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
