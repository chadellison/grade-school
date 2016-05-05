'use strict'

class School {
  constructor() {
    this.class = {}
  }

  roster() {
    return this.class
  }

  add(name, studentGrade) {
    if (this.class[studentGrade] === undefined) {
      this.class[studentGrade] = [name]
    } else {
      this.class[studentGrade] =
      this.class[studentGrade].concat([name]).sort()
    }
  }

  grade(grade) {
    if (this.class[grade] === undefined) {
      return []
    }
    return this.class[grade].sort()
  }
}

module.exports = School
