export default function o([skip, path],obj) {
    path = path.split('.');
    path[0] || path.shift();

    if (!obj) return false;
    
    for (let i = 0; i< path.length; i++) {
        obj = obj[path[i]];
        if (!obj) return false;
    }
    return true;
}