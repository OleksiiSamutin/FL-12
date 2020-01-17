class Fighter {

    constructor({name,damage,hp,strength,agility}){
        this._name = name;
        this._damage = damage;
        this._hp = hp;
        this._totalHp = hp;
        this._strength = strength;
        this._agility = agility;
        this._win = 0;
        this._loss = 0;
    }

    heal(numberOfHeal){
        if(this._hp + numberOfHeal > this._totalHp){
            this._hp = this._totalHp;
        } else{
            this._hp+=numberOfHeal;
        }

    }

    addWin(){
        this._win++;
    }

    addLoss(){
        this._loss++;
    }

    dealDamage(dealedDamage){
        if (dealedDamage > this._hp){
            this._hp = 0;
        } else{
            this._hp -= dealedDamage;
        }

    }

    logCombatHistory(){
        return `Name: ${this._name}, Wins: ${this._win}, Losses: ${this._loss}`
    }
    getName(){
        return this._name;
    }

    getDamage(){
        return this._damage;
    }

    getStrength(){
        return this._strength;
    }

    getAgility(){
        return this._agility;
    }

    getHealth(){
        return this._hp;
    }

}
const myFighter = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
let name1 = myFighter.getName();
console.log(name1);
let name2 = myFighter._name;
console.log(myFighter.getDamage());
console.log(myFighter.getStrength());
console.log(myFighter.getAgility());
console.log(myFighter.getHealth());