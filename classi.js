//Classi Ecmascript

class Person {
    constructor (name, surname, age, type, interests){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.type = type;
        this.interests = interests;
        
    }
    bio = function (){
        console.log (`${this.name} ${surname} è ${(this.type == 'Maschio') ? 'un ragazzo' : 'una ragazza'} di ${this.age} anni a cui piace ${this.interests.join(', ')}`);
    };
    saluta = function(){
        console.log(`Ciao sono ${this.name}`);
    };
   
}

class Teacher extends Person {
    constructor (name, surname, age, type, interests, matter){
        //super = sopra ---> ereditarietà
        super (name, surname, age, type, interests);

        this.matter = matter;
    }

    resumeStudent(nameStudent){
        console.log(`${nameStudent} non si mangia in classe`);
    }

   //Getter (in questo caso nel this bisogna mettere l'underscore) - serve per il Setter altrimenti non funziona;
   get matter(){
        return this._matter;
   }
   
    //Setter (in questo caso nel this bisogna mettere l'underscore) - serve per cambiare la materia;
    set matter(newMatter){
        this._matter = newMatter;
    }



}


const teacher = new Teacher('Paola', 'Rossi', 45, 'Femmina', ['Camminare', 'Correre'], 'Italiano');

console.log('----------------------------------------------------------------');

console.log('CLASSI');

console.log('----------------------------------------------------------------');

console.log(teacher);

//Azioni dell'insegnante
// teacher.resumeStudent('Paolo');

//Metodo per modificare la materia dell'insegnante (in questo caso e Italiano);
console.log('----------------------------------------------------------------');
console.log('Materia precedente - messa nel Teacher e di conseguenza nel Getter');
console.log(`Materia = ${teacher.matter}`);

//Modifica materia da Italiano a Antologia
teacher.matter = 'Antologia';

console.log('----------------------------------------------------------------');
console.log('Materia successiva - cambiata dal Setter');
console.log(`Materia = ${teacher.matter}`);
