/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
    let _path = {}
    for (let i = 0; i < arr1.length; i++) {
        let _val = arr1[i].toString().split("")
        let _the_node = _path
        for (let j = 0; j < _val.length; j++) {
            if (_the_node[_val[j]] == undefined) {
                _the_node[_val[j]] = {}
            }
            _the_node = _the_node[_val[j]]
        }
        _path = Object.assign(_path, _the_node)
    }
    let _maxLength = 0
    for (let x = 0; x < arr2.length; x++) {
        let _val = arr2[x].toString().split("")
        let _length = 0
        let _root_node = _path
        for (let y = 0; y < _val.length; y++) {
            console.log(_root_node[_val[y]])
            if (_root_node[_val[y]] != undefined) {
                _length++
                _root_node = _root_node[_val[y]]
            } else {
                break;
            }
        }
        if (_length > _maxLength) {
            _maxLength = _length
        }
    }
    return _maxLength;
};


console.log(longestCommonPrefix([1, 10, 100], [1000])) // 4