'use strict'

class School {
  constructor() {
    this.class = {}
  }
  roster() {
    return this.class
  }

  add(name, studentGrade) {
    if (this.studentGrade === studentGrade) {
      this.name += ", " + name
      this.class[this.studentGrade] = this.name.split(", ")
    } else {
      this.name = name
      this.studentGrade = studentGrade
      this.class[this.studentGrade] = [this.name]
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
