'use strict'

const _ = require("lodash")

class School {
  constructor(name, grade, teacher) {
    this.roster = {}
    this.name = name
    this.grade = grade
    this.teacher = teacher
  }

  add(name, grade) {
    this.roster[this.grade] = [this.name]
    return console.log(this.roster)
  }

  get addMethod() {
    this.roster[this.grade] = [this.name]
    return this.roster
  }

  get addTeacher() {
    for (let i = 0; i < 10; i++) {
      this.teacher[i] = this.addMethod
    }
    return this.teacher
  }

  get deleteTeachersThatAreOdd() {
    this.addTeacher
    for (let i = 0; i < 10; i++){
      if (i % 2 != 0) {
        delete this.teacher[i]
      }
    }
    return this.teacher
  }
}


let teacherObject = {}
const school = new School("chad", "mod3", teacherObject)

console.log(school.deleteTeachersThatAreOdd)

FOLLOW THESE STEPS
gem 'sprockets', '>= 3.0.0'
gem 'sprockets-es6'

school.js.es6
