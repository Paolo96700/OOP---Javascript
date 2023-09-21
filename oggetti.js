
//Stampino 3D di una persona
function Persona(nome, cognome, eta, genere, interessi) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.genere = genere;
    this.interessi = interessi;
    this.bio = function (){
        console.log (`${this.nome} ${cognome} è ${(this.genere == 'Maschio') ? 'un ragazzo' : 'una ragazza'} di ${this.eta} anni a cui piace ${this.interessi.join(', ')}`);
    };
    this.saluta = function(){
        console.log(`Ciao sono ${this.nome}`);
    };
}

// Istanze Persone
const persona1 = new Persona('Luca', 'Rossi', 23, 'Maschio', ['calcio', 'basket']);
const persona2 = new Persona('Anna', 'Verdi', 20, 'Femmina', ['letteratura', 'masterchef', 'musica']);


console.log('OGGETTI');

console.log(persona1);
console.log(persona2);

persona1.saluta();
persona2.saluta();

// persona1.bio();
// persona2.bio();

//Stampino 3D di un insegnante, derivante dalla persona
function Insegnante(nome, cognome, eta, genere, interessi, materia) {
    Persona.call(this, nome , cognome, eta, genere, interessi);

    this.materia = materia;
    this.saluta = function(){
        console.log (`Buongiorno sono ${this.nome} ${this.cognome}, insegnante di ${this.materia}`);
    };
};


console.log('----------------------------------------------------------------');
// Istanza Insegnanti
const insegnante1 = new Insegnante ('Anna', 'Blu', 32, 'Femmina', ['Netflix'], 'Storia');
const insegnante2 = new Insegnante ('Marina', 'Bianco', 32, 'Femmina', ['Netflix', 'Disney Plus', 'Carte', 'Passeggiate'], 'Matematica');

console.log(insegnante1);
console.log(insegnante2);

insegnante1.saluta();
insegnante2.saluta();
