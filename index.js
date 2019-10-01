// unique array of objects by specific key
module.exports = function (arr, key) {
  let seen = new Set()
  
  return arr.filter(it => {
    let val = it[key]
    if (seen.has(val)) {
      return false
    } else {
      seen.add(val)
      return true
    }
  })
}