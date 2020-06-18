export function findingElementInArray(id, arr) {
    console.log('functions', id, arr, arr.find(data => data.id == id))
    return arr.find(data => data.id == id);
}