interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

class Square implements Shape {
  private side: number;

  constructor(side: number) {
    this.side = side;
  }

  setSide(side: number): void {
    this.side = side;
  }

  area(): number {
    return this.side * this.side;
  }
}

function resizeRectangle(rectangle: Rectangle): void {
  rectangle.setWidth(5);
  rectangle.setHeight(10);
  console.log(`Area esperada: 50. Area obtenida: ${rectangle.area()}`);
}

function mostrarArea(shape: Shape): void {
  console.log(`Area: ${shape.area()}`);
}

resizeRectangle(new Rectangle(1, 1));
mostrarArea(new Rectangle(2, 3));
mostrarArea(new Square(4));