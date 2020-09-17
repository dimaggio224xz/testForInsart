export default function(i) {
    if (isNaN(i) || i[0] === '+' || i[0] === '-') {
        return false;
    } 
    return true;
}