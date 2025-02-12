Ось простий приклад коду на Javascript, який виконує основну обробку даних. Цей код зчитує дані з масиву об'єктів, фільтрує деякі результати, сортує їх та обчислює середнє значення з певного набору чисел.

```javascript
// Basic Data Processing in JavaScript

// Sample data
const data = [
    { id: 1, name: 'John', age: 21, score: 88 },
    { id: 2, name: 'Jane', age: 43, score: 95 },
    { id: 3, name: 'Peter', age: 29, score: 76 },
    { id: 4, name: 'Mary', age: 35, score: 89 },
    { id: 5, name: 'Tom', age: 64, score: 92 },
    { id: 6, name: 'Jerry', age: 37, score: 81 },
    { id: 7, name: 'Kim', age: 20, score: 84 },
    { id: 8, name: 'Sam', age: 51, score: 86 },
    { id: 9, name: 'Sue', age: 28, score: 91 },
    { id: 10, name: 'Nina', age: 42, score: 79 },
];

// Filter by age
const filteredData = data.filter((item) => item.age > 30);

// Sort by score
const sortedData = filteredData.sort((a, b) => b.score - a.score);

console.log('Sorted Data:', sortedData);

// Compute average score
let totalScore = 0;
for (let i = 0; i < sortedData.length; i++) {
    totalScore += sortedData[i].score;
}

const averageScore = totalScore / sortedData.length;

console.log('Average Score:', averageScore);

// Find max score
let maxScore = 0;
for (let i = 0; i < sortedData.length; i++) {
    if (sortedData[i].score > maxScore) {
        maxScore = sortedData[i].score;
    }
}

console.log('Max Score:', maxScore);

// Find min score
let minScore = 100;
for (let i = 0; i < sortedData.length; i++) {
    if (sortedData[i].score < minScore) {
        minScore = sortedData[i].score;
    }
}

console.log('Min Score:', minScore);
```

Цей код зчитує дані з масиву, фільтрує їх за віком, сортує за балами, розраховує середній бал, а також визначає максимальний та мінімальний бали.