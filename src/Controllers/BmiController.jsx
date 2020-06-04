import Model from '../Models/BmiModel'
import * as firebase from 'firebase';

class Controller {
  saveToDatabase(name, age, length, weight) {
    const userRoot = firebase.database().ref().child("users");
    const profileRoot = userRoot.child("user_profile");
    
    profileRoot.push({age: age, length: length, name: name, weight: weight})
  }

  calculateBmi(length, weight) {
    let model = new Model();
    let bmi = model.calculateBmi(length, weight);
    return bmi;
  }
}

export default Controller;