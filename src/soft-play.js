// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  occupancy() {
    return { adults: this.numAdults, children: this.numChildren }
  }

  enter(numAdults, numChildren) {
    if (numChildren <= numAdults) {
      this.numAdults = numAdults
      this.totalAdults = numAdults
      this.totalChildren = numChildren
      this.numChildren = numChildren
      return true
    } else {
      return false
    }
  }

  leave(numAdults, numChildren) {
    if (numAdults > this.numAdults || numChildren > this.numChildren) {
      return false
    } else if (numAdults < numChildren) {
      return false
    } else if (this.numAdults - numAdults < this.numChildren - numChildren) {
      return false
    } else {
      this.numAdults -= numAdults
      this.numChildren -= numChildren
      return true
    }
  }

  total(totalAdults, totalChildren) {
    this.totalAdults += totalAdults
    this.totalChildren += totalChildren
    return { totalAdults: this.totalAdults, totalChildren: this.totalChildren }
  }
}

const sp = new Softplay(0, 0)
sp.enter(2, 1)
sp.leave(1, 0)
console.log(sp)

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
