
const arr = [
    {
        name: 'John',
        age: 34,
        post: 'prof'
    },
    {
        name: 'da',
        age: 10,
        post: 'eleve'
    },
    {
        name: 'shin',
        age: 8,
        post: 'eleve'
    }
]

const jj = {
    name: 'John',
    age: 34,
    post: 'prof'
}


var x = 0


const b = () => {
    try {
        var f = 10 / 0
        f += 1

        console.log(jj.filter())

    } catch (e) {
        console.error('dddddddddddddddddddddddd', e)
    }

    x = 1
    return arr.filter((item) => item.age < 11 && item.age > 9 && item.post === 'eleve')
}

const c = () => {
    return arr.map((item) => { return { name: item.name, age: item.age, post: item.post === 'prof' ? 'professeur' : item.age > 9 ? 'poussain' : 'eleve' } })

}

// 5edmet ghoswa

console.log(b())

