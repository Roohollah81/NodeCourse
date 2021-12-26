// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(2))

const event =  {
    name: 'Birthday Party',
    guestList: ['Andrew', 'jen', 'Mike'],
    printGuestList() {
        console.log('Guest List for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}


event.printGuestList()