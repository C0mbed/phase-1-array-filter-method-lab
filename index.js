// Code your solution here

function findMatching(arr, str) {
    return arr.filter(word => word.toLowerCase() == str.toLowerCase());
}

function fuzzyMatch(arr, str) {
   return arr.filter(word => word.toLowerCase().startsWith(str.toLowerCase()))
}

function matchName(obj, str) {
    return obj.filter(element => element.name.toLowerCase() == str.toLowerCase())
}


