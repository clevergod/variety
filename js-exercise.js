//  冒泡排序

function bubbleSort(arr) {
  var temp = null
  for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length; j++){
      if (arr[i] > arr[j]) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  console.log('bubbleSort:', arr)
  return arr
}

// 快速排序

function quickSort(arr) {
  if (arr.length <= 1) { return arr }

  var tempIndex = Math.floor(arr.length/2)
  var temp = arr.splice(tempIndex, 1)[0]

  var left = []
  var right = []

  for(var i = 0; i < arr.length; i++) {
    if (arr[i] < temp) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([temp], quickSort(right))
}

// 数组去重1
const unique1 = (arr) => {
  return [...new Set(arr)]
}

// 数组去重2

const unique2 = (arr) => {
  let json = {}
  let resArr = []
  for(let i = 0; i < arr.length; i++) {
    if (!json[arr[i]]) {
      json[arr[i]] = 1
      resArr.push(arr[i])
    }
  }
  return resArr
}

// 数组去重3
const unique3 = (arr) => { 
  let resArr = []

  for (let i = 0; i < arr.length; i++){
    if (resArr.indexOf(arr[i]) === -1) {
      resArr.push(arr[i])
    }
  }
  return resArr
}

// 数组去重4
const unique4 = (arr) => {
  return arr.filter((item, index, array) => {
    return array.indexOf(item) === index
  })
}


const array = [3, 1, 1, 2, 6, 6, 10, 4, 7]
bubbleSort(array)
console.log('quickSort:', quickSort(array))
console.log('unique1:', unique1(array))
console.log('unique2:', unique2(array))
console.log('unique3:', unique3(array))
console.log('unique4:', unique4(array))


function geeter(i, r) {
  let count = 0
  const getNum = (n) => {
    const arr = '_'.repeat(n-1).split('_')
    const num = arr.reduce((res, _, index) => {
      const d = index + 1 
      const y = n - d
     return  res + d * Math.pow(10, y)
    },0)
    console.log(num)
    return num
  }
  for (i; i < r; i++){
    if (getNum(i) % 3) {
      count++
    }
  }
  return count
}

// console.log(geeter(200, 50000))
/*
 * 获得数组[1,2,3,4.....n]
*/
function getArr(n) {
  return '_'.repeat(n - 1).split('_').map((_, index) => index + 1)
}
/*
 * 
*/
function add(){
  const arr = [...arguments]
  return arr.map((item) => Number(item)).reduce((res, item) => {
    return res + item
  }, 0)
}

/*
 * 去除字符串前后的多余空格
*/
function trim(str) {
  return str.replace(/^(\s|\u00A0)+/, '\r').replace(/\(s+|\u00A0)$/, '')
}
