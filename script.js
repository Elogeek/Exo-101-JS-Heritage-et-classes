class Vehicule {
    constructor(couleur, roues, marque) {
        this.couleur = couleur;
        this.roues = roues;
        this.marque = marque;
    }
        demarrer() {
            console.log("je démarre");
        }
        arreter () {
            console.log("je m'arrête");
        }
    }

    class Velo extends Vehicule {
        constructor(couleur, roues, marque, rayonRoues, typePeinture) {
            super(couleur, roues, marque);
            this.rayonRoues = rayonRoues;
            this.typePeinture = typePeinture;
        }
        monter() {
            console.log("je monte sur mon vélo");
        }
    }

    class Voiture extends Vehicule {

    constructor(couleur, roues, marque, assurance, proprietaire) {
        super(couleur, roues, marque);
        this.assurance = assurance;
        this.proprio = proprietaire;
    }
        passerAuCarWash() {
            console.log("Rouler toute propre c'est mieux !");
        }
    }

    let Ford = new Voiture("turquoise", "4", "Ford", "ING+", "moi");
    Ford.demarer();