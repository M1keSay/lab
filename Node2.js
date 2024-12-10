var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1.1 Реализовать метод, возвращающий медианное значение, получаемое из массива целых чисел 
function med(numbers) {
    var count = numbers.length;
    var mediana = Math.floor(count / 2);
    numbers.sort(function (a, b) { return a - b; });
    console.log("Отсортированный массив: " + numbers.join(","));
    return numbers[mediana];
}
var numbers = [15, 6, 8, 9, 1256, 51, 4, 4];
console.log("Исходный массив: " + numbers.join(","));
console.log("НОМЕР 1 - " + med(numbers) + "\n");
//1.2 Реализовать метод, возвращающий количество ненулевых значений в матрице целых чисел в заданном отрезке
function counter(numbers2) {
    var count = 0;
    for (var i = 0; i < numbers2.length; i++) {
        for (var j = 0; j < numbers2[i].length; j++) {
            if (numbers2[i][j] != 0) {
                count++;
            }
        }
    }
    return count;
}
var numbers2 = [
    [1, 2, 3, 0],
    [4, 0, 6, 7],
    [8, 9]
];
console.log("НОМЕР 2 - " + counter(numbers2) + "\n");
// 3  Создайте кортеж, который может содержать только 2 числовых и 1 строковое значения 
//    (порядок следования: число, строка, число). Реализуйте метод, возвращающий произведение числовых значений. 
function multip(kortej) {
    var a = kortej[0];
    var b = kortej[2];
    return a * b;
}
var kortej = [15, "пупупу", 5];
console.log("НОМЕР 3 - " + multip(kortej) + "\n");
// 3   Создайте тип перечисление для типов витаминов (A, 
//     B3, B6, B12, E и т.д.). Выведите какой-либо тип витамина в консоль. 
var Vitamin;
(function (Vitamin) {
    Vitamin["A"] = "Vitamin A";
    Vitamin["B3"] = "Vitamin B3";
    Vitamin["B6"] = "Vitamin B6";
    Vitamin["B12"] = "Vitamin B12";
    Vitamin["E"] = "Vitamin E";
})(Vitamin || (Vitamin = {}));
var v = Vitamin.B12;
console.log("НОМЕР 4 - " + v + "\n");
//4
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //тут был label вместо Name
        _this.name = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function printPetInfo(pet) {
    console.log("Имя : " + pet.name);
    console.log("Возраст : " + pet.age);
    console.log("Спик : " + pet.speak() + "\n");
}
var cat1 = new Cat();
var dog1 = new Dog();
printPetInfo(cat1);
printPetInfo(dog1);
var vitamin = {
    type: Vitamin.A,
    name: "Octogon",
    dosage: 900,
};
console.log("Витамин Info JSON:", JSON.stringify(vitamin, null, 2));
