function convertString(str, value) {
    if (value == null) {
        return str.concat("0.0");
    } else {
        return str.concat(value);
    }
}

export { convertString };