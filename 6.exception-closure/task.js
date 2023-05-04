function parseCount(value) {
    let result = Number.parseFloat(value);
    if (isNaN(result)) {
      throw new Error("Невалидное значение");
    }
    return result;
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    }
    catch (error) {
      return error;
    }
  }

  class Triangle {
    constructor (firstSide, secondSide, thirdSide) {
      this.firstSide = firstSide;
      this.secondSide = secondSide;
      this.thirdSide = thirdSide;
  
      if ((this.firstSide + this.secondSide < this.thirdSide) || (this.firstSide + this.thirdSide < this.secondSide) || (this.secondSide + this.thirdSide < this.firstSide)) {
      throw Error('Треугольник с такими сторонами не существует');
      }
    }
  
    get perimeter() {
      return this.firstSide + this.secondSide + this.thirdSide;
    }
  
    get area() {
      let p = this.perimeter / 2;
      return Number.parseFloat(Math.sqrt(p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide)).toFixed(3));
    }
  }

  function getTriangle(firstSide, secondSide, thirdSide) {
    try {
      return new Triangle(firstSide, secondSide, thirdSide);
    } catch {
      return object = {
        get perimeter() {
        return "Ошибка! Треугольник не существует";
        },
        get area() {
          return "Ошибка! Треугольник не существует";
        }
      }
    }
}