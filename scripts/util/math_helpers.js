function clamp(value, min, max) {
    if(min>max) throw "error: clamp improperly applied; min is greater than max"
    return Math.max(Math.min(value, max), min);
}
