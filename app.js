// This file initializes the student marks application and handles user interactions.

import { saveMarks, getMarks } from './storage.js';
import { calculateTotal, calculateAverage } from './calculator.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('marksForm');
    const marksList = document.getElementById('marksList');
    const totalDisplay = document.getElementById('total');
    const averageDisplay = document.getElementById('average');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const subject = document.getElementById('subject').value;
        const mark = parseFloat(document.getElementById('mark').value);

        if (subject && !isNaN(mark)) {
            saveMarks(subject, mark);
            updateMarksList();
            calculateAndDisplayResults();
            form.reset();
        } else {
            alert('Please enter valid subject and mark.');
        }
    });

    function updateMarksList() {
        const marks = getMarks();
        marksList.innerHTML = '';
        marks.forEach(({ subject, mark }) => {
            const li = document.createElement('li');
            li.textContent = `${subject}: ${mark}`;
            marksList.appendChild(li);
        });
    }

    function calculateAndDisplayResults() {
        const marks = getMarks();
        const total = calculateTotal(marks);
        const average = calculateAverage(marks);
        totalDisplay.textContent = `Total: ${total}`;
        averageDisplay.textContent = `Average: ${average.toFixed(2)}`;
    }

    updateMarksList();
    calculateAndDisplayResults();
});