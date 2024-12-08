function filterByStarting(arr, str) {
    return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
}
const stringsArray = ['APPLE', 'banAna', 'ApRiCoT', 'orange', 'AVAcaDO', 'GraPe'];

const result = filterByStarting(stringsArray, 'ap');

console.log(result);