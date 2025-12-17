class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    talk(what) {
        return this.name + ': ' + what
    }

    walk(km) {
        return this.name + '👟 ... ' + km + 'km'
    }
}

const lau = new Person('Lau', 24)
const pau = new Person('Pau', 23)

console.log(lau)
console.log(pau)

console.log(lau.talk('Hola mundo mundial'))
console.log(lau.talk('Happy day'))

console.log(pau.walk(20))

