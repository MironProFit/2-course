function Circle(radius) {
    this.radius = radius;
    this.getArea = function() {
        return Math.PI * (this.radius ** 2);
    };
    this.getPerimeter = function() {
        return 2 * Math.PI * this.radius;
    };
}

const circle1 = new Circle(3);
const circle2 = new Circle(8);

console.log(`Circle 1:`);
console.log(`Площадь: ${circle1.getArea()}`);
console.log(`Периметр: ${circle1.getPerimeter()}`);

console.log(`Circle 2:`);
console.log(`Площадь: ${circle2.getArea()}`);
console.log(`Периметр: ${circle2.getPerimeter()}`);