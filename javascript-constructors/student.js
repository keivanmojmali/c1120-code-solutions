/* exported Student */


function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

var studentPrototypes = {
  getFullName: function () {
    var getFullName = this.firstName + ' ' + this.lastName;
    return getFullName;
  },
  getIntroduction: function () {
    var introduction = 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
    return introduction;
  }

}

Student.prototype = studentPrototypes;
var ron = new Student('Ron', 'Jeffries', 'extreme programming');
