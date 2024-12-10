//1.1 Реализовать метод, возвращающий медианное значение, получаемое из массива целых чисел 
function med(numbers: number[]): number{

    let count: number = numbers.length;
    let mediana: number = Math.floor(count / 2);
    numbers.sort((a, b) => a - b);
    console.log("Отсортированный массив: " + numbers.join(","));
    return numbers[mediana]
}

let numbers: number[]= [15,6,8,9,1256,51,4,4];
console.log("Исходный массив: " + numbers.join(","));
console.log("НОМЕР 1 - " + med(numbers)+"\n");


//1.2 Реализовать метод, возвращающий количество ненулевых значений в матрице целых чисел в заданном отрезке

function counter(numbers2: number[][]): number{
    let count:number=0;
    for (let i = 0; i < numbers2.length; i++){
        for (let j = 0; j < numbers2[i].length; j++){
            if (numbers2[i][j] != 0 ){
                count++;
            }
        }
    }
    return count;
}

let numbers2: number[][]=[
    [1, 2, 3, 0],
    [4, 0, 6, 7],
    [8, 9]
];
console.log("НОМЕР 2 - " +counter(numbers2)+"\n");


// 3  Создайте кортеж, который может содержать только 2 числовых и 1 строковое значения 
//    (порядок следования: число, строка, число). Реализуйте метод, возвращающий произведение числовых значений. 

function multip(kortej: [number, string, number] ): number{
    let a=kortej[0];
    let b=kortej[2];
    return a*b;
}
let kortej: [number, string, number] = [15,"пупупу", 5]
console.log("НОМЕР 3 - " + multip(kortej) +"\n");

// 3   Создайте тип перечисление для типов витаминов (A, 
//     B3, B6, B12, E и т.д.). Выведите какой-либо тип витамина в консоль. 

enum Vitamin{
    A = "Vitamin A",
    B3 = "Vitamin B3",
    B6 = "Vitamin B6",
    B12 = "Vitamin B12",
    E = "Vitamin E"
}

let v: Vitamin = Vitamin.B12;
console.log("НОМЕР 4 - " + v +"\n");

//4

class Pet { 
    name: string = 'Some pet' 
    age: number = -1 
    speak() { 
        return "No speak. I am fish!"; 
    } 
} 
class Dog extends Pet { 
    //тут был label вместо Name
    name = "AngryHunter"; 
    age = 8; 
    speak() { 
    return "Yaw-Gaw!"; 
    } 
} 
class Cat extends Pet { 
    name = 'Barsik'; 
    age = 2; 
    speak() { 
    return "Miyau!";
    }
} 

function printPetInfo<T extends Pet>(pet: T): void {
    console.log("Имя : " + pet.name);
    console.log("Возраст : " + pet.age);
    console.log("Спик : " + pet.speak() +"\n");
}
const cat1 = new Cat();
const dog1 = new Dog();

printPetInfo(cat1);
printPetInfo(dog1);


// Создайте тип с применением перечисления из 3го задания (для 
// использования его в качестве типа поля, для некоторых случаев 
// возможно его использование при реализации массива). Добавьте 
// собственные поля стандартных типов, корректно характеризующие ту 
// или иную предметную область, совпадающую с вашим типом 
// перечисления. Создайте объект на основе вашего типа и выведите его в 
// консоль в формате JSON.

type VitaminInfo = {
    type: Vitamin;
    name: string;
    dosage: number;
};

const vitamin: VitaminInfo = {
    type: Vitamin.A,
    name: "Octogon",
    dosage: 900,
};
console.log("Витамин Info JSON:", JSON.stringify(vitamin, null, 2));