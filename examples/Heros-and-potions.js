class Hero {
    #inventory
    static #MAX_POTIONS_INVENTORY = 6;
    constructor(maxHp, maxMana) {
        this.#inventory = [];
        this.maxHp = maxHp;
        this.maxMana = maxMana;
        this.currentHp = maxHp;
        this.currentMana = maxMana;
    }

    addPotion(potion) {
        if (this.#inventory.length === Hero.#MAX_POTIONS_INVENTORY) {
            throw new Error('Maximum items in inventory')
        }
        this.#inventory.push(potion)
    }
}

class Potion {
    #owner
    #name
    constructor(owner, name) {
        this.#name = name;
        this.#owner = owner;

    }
    drink() {

    }
}

class HealthPotion extends Potion {
    #owner
    static #RESTORES_HP = 250;
    constructor(owner) {
        super(owner, 'Health potion')
        this.#owner = owner;
    }
    drink() {
        if (this.#owner.hp === this.#owner.maxHp) {
            throw new Error('Already at full health')
        }
        if (this.#owner.hp + HealthPotion.#RESTORES_HP > this.#owner.maxHp) {
            this.#owner.hp = this.#owner.maxHp;
        } else {
            this.#owner.hp += HealthPotion.#RESTORES_HP;
        }
    }
}
class ManaPotion extends Potion {
    #owner
    static #RESTORES_MANA = 150;
    constructor() {
        super(owner, 'Mana potion')
        this.#owner = owner;
    }
    drink() {
        if (this.#owner.mana === this.#owner.maxMana) {
            throw new Error('Already at full mana')
        }
        if (this.#owner.mana + ManaPotion.#RESTORES_MANA > this.#owner.maxMana) {
            this.#owner.mana = this.#owner.maxMana;
        } else {
            this.#owner.mana += ManaPotion.#RESTORES_MANA;
        }
    }

}

const hero = new Hero(100, 50)
const healthPotion = new HealthPotion(hero)
healthPotion.drink()
