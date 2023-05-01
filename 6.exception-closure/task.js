﻿// Задача №1

function parseCount(count) {
  let parcedCount = parseFloat(count);
  if (isNaN(parcedCount)) {
    throw new Error("Невалидное значение");
  } else {
    return parcedCount;
  }
}

function validateCount(count) {
  try {
    return parseCount(count);
  } catch(error) {
    return error;
  }
}

// Задача №2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if ((a + b < c) || (a + c < b) || (b + c < a)) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    let p = this.perimeter / 2;
    return Number(Math.sqrt(p * (p - this.a) * (p- this.b) * (p - this.c)).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } 
  catch(error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      }
    }
  }
}