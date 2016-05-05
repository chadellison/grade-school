'use strict'

class School {
  constructor() {
    this.class = {}
  }

  roster() {
    return this.class
  }

  add(name, studentGrade) {
    if (this.class[studentGrade] !== undefined) {
      this.class[studentGrade] =
      this.class[studentGrade].concat([name]).sort()
    } else {
      this.class[studentGrade] = [name]
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
