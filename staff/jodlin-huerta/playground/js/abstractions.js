
/* Object */
//var o = {} // literal object
var o = new Object()
/* Array */
//var a = [] // literal array
var a = new Array()
//var a1 = [10, 20, 30]
var a1 = new Array(10, 20, 30)

/* Person */

var Person = function(name, dateOfBirth) {
var Person = function(name, surname, dateOfBirth) {
    this.name = name
    this.surname = surname
    this.dateOfBirth = dateOfBirth
    this.emotions = '😊'
}

var peter = new Person('Peter Pan', '1990-01-01')
var wendy = new Person('Wendy Darling', '1991-02-02')
Person.prototype.eat = function(meal) {
    return this.name + ': eating ' + meal + ' ...'
}

Person.prototype.read = function(readable) {
    return this.name + ': reading ' + readable + ' ...'
}

Person.prototype.salute = function(person) {
    return this.name + ': Hello, ' + person.name + '!'
}

Person.prototype.talk = function(person, what) {
    return this.name + ' to ' + person.name + ': ' + what
}

Person.prototype.changeEmotions = function(emotions) {
    this.emotions = emotions
}

var peter = new Person('Peter', 'Pan', '1990-01-01')
var wendy = new Person('Wendy', 'Darling', '1991-02-02')

peter.salute(wendy)

/* Product */

var Product = function(brand, model, sku, variant) {
    this.model = model
    this.sku = sku
    this.variant = variant
    this.active = true
}

Product.prototype.deactivate = function() {
    this.active = false
}

var nikeAirMaxBlack = new Product('Nike', 'Air Max', 'nike-airmax-black', 'Black')
for (var i = 0; i < products.length; i++) {
    var product = products[i]
    var line = product.brand + ' ' + product.model + ' ' + product.variant + ' (' + product.sku + ')'
    console.log(line)
}
}

/* Character */

var Character = function(name, skills) {
    this.name = name
    this.skills = skills
    this.level = 0
}

Character.prototype.do = function(what) {
    for (var i = 0; i < this.skills.length; i++) {
        var skill = this.skills[i]

        if (skill === what) {
            this.level++
            return 'OK'   
        }
    }

    this.level--
    return 'KO'
}

var squall = new Character('Squall', ['magic', 'attack', 'use object', 'talk'])

debugger
squall.do('attack') // OK
squall.do('defend') // KO