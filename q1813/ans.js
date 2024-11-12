/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar1 = function (sentence1, sentence2) {
    if (sentence1.startsWith(sentence2) || sentence2.startsWith(sentence1) || sentence1.endsWith(sentence2) || sentence2.endsWith(sentence1)) {
        return true;
    }
    let s1 = sentence1.split(" ");
    let s2 = sentence2.split(" ");
    let cmpStr = [], findStr = ""
    if (s1.length > s2.length) {
        findStr = s1.join('')
        cmpStr = s2;
    } else {
        findStr = s2.join('')
        cmpStr = s1
    }
    let tmp = ''
    let cmpStrLen = cmpStr.length
    for (let x = 0; x < cmpStrLen; x++) {
        tmp += cmpStr.shift()
        console.log(tmp, "~~~", cmpStr.join(''), "~~~", findStr)
        reg = '^' + tmp + '(\\w*?)' + cmpStr.join('') + '$'

        if (findStr.match(reg)) {
            return true;
        }
    }
    return false;
};

var areSentencesSimilar = function (sentence1, sentence2) {
    if (sentence1 == sentence2) {
        return true;
    }
    let s1 = sentence1.split(" ");
    let s2 = sentence2.split(" ");
    let rs = checkCmp(s1, s2)
    s1 = rs[0]; s2 = rs[1];
    if (s1.length == 0 || s2.length == 0) {
        return true
    }
    s1 = s1.reverse()
    s2 = s2.reverse()
    rs = checkCmp(s1, s2)
    s1 = rs[0]; s2 = rs[1];
    if (s1.length == 0 || s2.length == 0) {
        return true
    }
    return false;
}

function checkCmp (s1, s2) {
    len = s1.length;
    for (let x = 0; x < len; x++) {
        let c1 = s1[x]
        let c2 = s2[x]
        s1[x] = undefined
        s2[x] = undefined
        if (c1 == undefined || c2 == undefined) {
            break;
        }
        if (c1 != c2) {
            s1[x] = c1
            s2[x] = c2
            break;
        }
    }
    s1 = s1.filter( v => v != undefined );
    s2 = s2.filter( v => v != undefined );
    return [s1,s2]
}
sentence1 = "My name is Haley"
sentence2 = "My Haley"

sentence1 = "Eating right now"
sentence2 = "Eating"

sentence1 = "Ogn WtWj HneS"
sentence2 = "Ogn WtWj HneS"

// sentence1 = "d T d ED uXW L U J n klIe"
// sentence2 = "d T d ED uXW L U J klIe"

// sentence1 = "xD iP tqchblXgqvNVdi"
// sentence2 = "FmtdCzv Gp YZf UYJ xD iP tqchblXgqvNVdi"

sentence1 = "of"
sentence2 = "A lot of words"
console.log(areSentencesSimilar(sentence1, sentence2))
