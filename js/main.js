// Parent/Super Class
class Animal {
    // Encapsulation: Data Hiding and Binding
    #diet;   // Carnivore or Herbivore or Omnivore
    #species;   // Binomial Nomenclature

    constructor(name, type, habitat) {
        this.name = name;
        this.type = type;   // Vertebrate or Invertebrate
        this.habitat = habitat;
    }

    // Getter and Setter for Diet
    get diet() { return this.#diet; }

    set diet(diet) { this.#diet = diet; }

    // Getter and Setter for Species
    get species() { return this.#species; }

    set species(species) { this.#species = species; }

    // Common method for all animals
    eat(food) {
        console.log(`${this.name} is eating ${food}!`);
    }

    // Polymorphism: Overridden method in child classes
    sound() {
        console.log(`${this.name} makes a sound!`);
    }
}

// Direct Child/Sub Classes of Animal (Inheritance)
class Invertebrate extends Animal {
    #blooded = 'cold-blooded';   // All invertebrates are cold-blodded

    constructor(name, type, habitat) {
        super(name, type, habitat);
    }

    // Getter for Blooded Type
    get blooded() { return this.#blooded; }
}

class Vertebrate extends Animal {
    #blooded;   // All vertebrates are either warm or cold blodded

    constructor(name, type, habitat, blooded) {
        super(name, type, habitat);
        this.#blooded = blooded
    }

    // Getter for Blooded Type
    get blooded() { return this.#blooded; }
}

// Indirect Child/Sub Classes of Animal (Inheritance)
class Arthropoda extends Invertebrate {
    constructor(name, habitat) {
        super(name, 'Invertebrate', habitat);
    }
}

class Fish extends Vertebrate {
    constructor(name, habitat) {
        super(name, 'Vertebrate', habitat, 'cold-blooded');
    }
}

class Amphibia extends Vertebrate {
    constructor(name, habitat) {
        super(name, 'Vertebrate', habitat, 'cold-blooded');
    }
}

class Reptiles extends Vertebrate {
    constructor(name, habitat) {
        super(name, 'Vertebrate', habitat, 'cold-blooded');
    }
}

class Aves extends Vertebrate {
    constructor(name, habitat) {
        super(name, 'Vertebrate', habitat, 'warm-blooded');
    }

    sound() {
        console.log(`${this.name} chirps!`)
    }
}

class Mammals extends Vertebrate {
    constructor(name, habitat) {
        super(name, 'Vertebrate', habitat, 'warm-blooded')
    }
}

// Instantiating Objects
const butterfly = new Arthropoda('Butterfly', 'Air');
const fish = new Fish('Fish', 'Water');
const frog = new Amphibia('Frog', 'Water and Land');
const tortoise = new Reptiles('Tortoise', 'Land');
const bird = new Aves('Bird', 'Air');
const cat = new Mammals('Cat', 'Land');

// Example Usage
butterfly.eat('nectar');
fish.eat('plankton');
frog.eat('insects');
tortoise.eat('plants');
bird.eat('seeds');
cat.eat('cat food');

// Sounds Usage
bird.sound();
