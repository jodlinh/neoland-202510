var collection = {
    count: 0    
}

// TODO implement method add

collection.add = function(item) {
    this[this.count] = item
    this.count++    
}

collection.remove = function(item) {
    for (var i=0; i < this.count; i++)
        if(this[i] === item)
            delete this[i]
}



collection.add(1000)
collection.add('2000')
collection.add(2000)

console.log(collection)

collection.remove('2000')

console.log(collection)



/*
collection.add('Peter')
console.log(collection)

// { 0: 'Peter', count: 1 }

collection.add('Wendy')
console.log(collection)
// { 0: 'Peter', 1: 'Wendy', count: 2 }

collection.add('James')
console.log(collection)
// { 0: 'Peter', 1: 'Wendy', 2: 'James', count: 3 }

collection.remove('Wendy')
console.log(collection)
// { 0: 'Peter',  2: 'James', count: 3 }
*/