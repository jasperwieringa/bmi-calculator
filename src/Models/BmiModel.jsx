class Model {
  calculateBmi(length, weight) {
    const divideBy = length*length;
    return weight / divideBy;
  }
}

export default Model;