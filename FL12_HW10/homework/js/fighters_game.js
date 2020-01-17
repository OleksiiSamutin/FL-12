const myFighter = new Fighter({ name: 'Maximus', damage: 20, strength: 20, agility: 15, hp: 100 });
const secondFighter = new Fighter({ name: 'Commodus', damage: 25, strength: 30, agility: 25,hp: 90 });


function battle(firstFighter, secondFighter) {
    if (firstFighter.getHealth() === 0) {
        return `${firstFighter.getName()} is dead and can't fight.`
    } else if (secondFighter.getHealth() === 0) {
        return `${secondFighter.getName()} is dead and can't fight.`
    } else {
        while (firstFighter.getHealth() > 0 && secondFighter.getHealth() > 0) {
            firstFighter.attack(secondFighter);
            secondFighter.attack(firstFighter);
        }
        if (firstFighter.getHealth() === 0) {
            firstFighter.addLoss();
            secondFighter.addWin();
            return `${secondFighter.getName()} has won!`
        } else {
            secondFighter.addLoss();
            firstFighter.addWin();
            return `${firstFighter.getName()} has won!`
        }
    }

}


class Fighter {

    constructor({ name, damage, strength, agility, hp }) {
        this._name = name;
        this._damage = damage;
        this._totalHp = hp;
        this._strength = strength;
        this._agility = agility;
        this._hp = hp;
        this._win = 0;
        this._loss = 0;
    }

    heal(numberOfHeal) {
        if (this._hp + numberOfHeal > this._totalHp) {
            this._hp = this._totalHp;
        } else {
            this._hp += numberOfHeal;
        }

    }

    addWin() {
        this._win++;
    }

    addLoss() {
        this._loss++;
    }

    dealDamage(dealedDamage) {
        if (dealedDamage > this._hp) {
            this._hp = 0;
        } else {
            this._hp -= dealedDamage;
        }

    }

    logCombatHistory() {
        return `Name: ${this.getName()}, Wins: ${this._win}, Losses: ${this._loss}`
    }

    attack(defender) {
        let prob = 100 - defender.getAgility() - defender.getStrength();
        let real = Number.parseInt(Math.random() * 100);
        if (prob >= real) {
            defender.dealDamage(this.getDamage());
            console.log(`${this._name} makes ${this._damage} damage to ${defender._name}`);
        } else {
            console.log(`${this._name} attack missed`);
        }
    }
    getName() {
        return this._name;
    }

    getDamage() {
        return this._damage;
    }

    getStrength() {
        return this._strength;
    }

    getAgility() {
        return this._agility;
    }

    getHealth() {
        return this._hp;
    }

}
const myFighter = new Fighter({ name: 'Maximus', damage: 20, strength: 20, agility: 15, hp: 100 });
const secondFighter = new Fighter({ name: 'Commodus', damage: 25, strength: 30, agility: 25,hp: 90 });
let name1 = myFighter.getName();
console.log(name1);
let name2 = myFighter._name;
console.log(myFighter.getDamage());
console.log(myFighter.getStrength());
console.log(myFighter.getAgility());
console.log(myFighter.getHealth());
battle(myFighter, secondFighter);
battle(myFighter,secondFighter);
myFighter.heal(100);
secondFighter.heal(100);
battle(secondFighter,myFighter);
console.log(myFighter.logCombatHistory());
console.log(secondFighter.logCombatHistory());