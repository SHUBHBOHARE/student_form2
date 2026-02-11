function saveMarks(marks) {
    localStorage.setItem('studentMarks', JSON.stringify(marks));
}

function getMarks() {
    const marks = localStorage.getItem('studentMarks');
    return marks ? JSON.parse(marks) : [];
}

export { saveMarks, getMarks };