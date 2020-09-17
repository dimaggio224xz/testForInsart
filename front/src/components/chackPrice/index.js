export default function(i) {
    if(i === '') {
        return true;
    }
    if (isNaN(i) || i[0] === '+' || i[0] === '-') {
        return false;
    } 
    return true;
}