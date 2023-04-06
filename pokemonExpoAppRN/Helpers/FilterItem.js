export const filterTypeName = function filterTypeName(array, key) {
    return array.filter(function(el) {
      return el.type.toLowerCase().indexOf(key.toLowerCase()) > -1;
    })
  }

export const comparer = function comparer(a, b) {
  return a.id - b.id;
}
