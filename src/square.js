function square_root(num) {
    if (num < 0 || isNaN(num)) {
        return NaN
        alert("Unexpected Condition");
     }

    return Math.sqrt( num )
}

module.exports = square_root;