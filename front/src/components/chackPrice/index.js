export default function(i) {
    if(i === '') {
        return true;
    }
    if (isNaN(i) || i[0] === '+' || i[0] === '-' || i[i.length-1] === ' ') {
        return false;
    } 
    return true;
}