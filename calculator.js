function calculateTotal(marks) {
    return marks.reduce((acc, mark) => acc + mark, 0);
}

function calculateAverage(marks) {
    if (marks.length === 0) return 0;
    const total = calculateTotal(marks);
    return total / marks.length;
}

export { calculateTotal, calculateAverage };