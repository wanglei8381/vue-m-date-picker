class DatePack {
  constructor () {
    const d = new Date()
    this.year = d.getFullYear()
    this.month = d.getMonth() + 1
    this.day = d.getDate()
    this.years = []
    this.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    this.days = []
    this.calcYears(this.year - 5, this.year + 5)
    this.calcDays(this.year, this.month)
  }

  setYear (index) {
    this.year = this.years[index]
  }

  setMonth (index) {
    this.month = this.months[index]
  }

  setDay (index) {
    this.day = this.days[index]
  }

  calcYears (start, end) {
    this.years = []
    while (start <= end) {
      this.years.push(start)
      start++
    }
  }

  calcDays (year, month) {
    let sum = new Date(year, month, 0).getDate()
    this.days = []
    for (let i = 1; i <= sum; i++) {
      this.days[i - 1] = i
    }
  }
}

export default DatePack
