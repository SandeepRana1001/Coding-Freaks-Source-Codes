class Helper {
    constructor() {
        this.arr = [1, 2, 3, 4, 5, 6]
        this.newArr = [
            {
                id: '1',
                name: 'One'
            },
            {
                id: '2',
                name: 'Two'
            },
            {
                id: '3',
                name: 'Three'
            }
        ]
    }

    setTitle(title) {       // Function To Set The Title Of The Webpage
        document.title += title
    }

    foreach() {             // ForEach Array Helper Code Lies Here
        this.setTitle('Foreach Helper')
        let sum = 0;
        this.arr.forEach(num => {
            sum = sum + num
        })
        return sum
    }

    map() {
        this.setTitle('Map Helper')
        return this.arr.map(item => {
            return item * 2
        })
    }

    filter() {
        this.setTitle('Filter Helper')

        return this.newArr.filter(item => {
            return item.id !== '2'
        })
    }

    find() {
        this.setTitle('Find Helper')

        return this.newArr.find(item => {
            return item.id !== '2'
        })

    }

    reduce() {
        this.setTitle('Reduce Helper')
        return this.arr.reduce((prev, next) => {
            return prev + next
        }, 0)

    }
    sort() {
        this.setTitle('Sorting Helper')
        const arr = [100, 10, 1000, 1, 2, 5, 4, 3, 0]
        return arr.sort((a, b) => {
            // if (a < b) return -1
            // if (a === b) return 0
            // if (a > b) return 1
            return a - b;
        })
    }

    some() {
        this.setTitle('Some Helper')
        return this.arr.some((item) => {
            return item % 2 === 0
        })
    }

    every() {
        this.setTitle('Every Helper')
        return this.arr.every((item) => {
            return item % 2 === 0
        })
    }

    fill() {
        const arr = [1, 2, 3, 4, 5]
        // arr.fill(3)
        // arr.fill(10,2)
        // arr.fill(10,1,4)
        return arr
    }

}

const helperObj = new Helper()                  // Creating An Object
// console.log(helperObj.foreach())               // Calling The Foreach Function
// console.log(helperObj.map())                  // Calling The Map Function
// console.log(helperObj.filter())              // Filter Array Helper
// console.log(helperObj.find())               // Find  Array Helper
// console.log(helperObj.reduce())            // Reduce  Array Helper
// console.log(helperObj.sort())             // Sort Array Helper
// console.log(helperObj.some())               // Some Array Helper
console.log(helperObj.every())               // Every Array Helper
console.log(helperObj.fill())                   // Fill Array Helper