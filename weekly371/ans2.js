/**
 * @param {string[][]} access_times
 * @return {string[]}
 */
var findHighAccessEmployees = function (access_times) {
    let accbox = {}
    access_times = access_times.sort((a, b) => {
        return a[1] - b[1]
    })
    console.log(access_times)

    for (var i in access_times) {
        let data = access_times[i]
        let empn = data[0]
        let logt = data[1]

        let logth = logt.substring(0, 2)
        let logtm = logt.substring(2, 4)

        accbox[empn] = accbox[empn] ? accbox[empn] : []
        while (accbox[empn].length > 0 && accbox[empn].length < 3) {
            var chkh = accbox[empn][0][0]
            var chkm = accbox[empn][0][1]
            if (chkh == logth) {
                break;
            } else if (logth - chkh <= 1 && parseInt(chkm) > parseInt(logtm)) {
                break;
            } else {
                accbox[empn].shift()
            }
        }
        accbox[empn].push([logth, logtm])
    }
    let res = []
    for (let emp in accbox) {
        if (accbox[emp].length >= 3) {
            res.push(emp)
        }
    }
    return res

};

access_times = [["cd", "1025"], ["ab", "1025"], ["cd", "1046"], ["cd", "1055"], ["ab", "1124"], ["ab", "1120"]]
access_times = [["d", "0002"], ["c", "0808"], ["c", "0829"], ["e", "0215"], ["d", "1508"], ["d", "1444"], ["d", "1410"], ["c", "0809"]]
access_times = [["iudjn", "0812"], ["lnlqp", "0848"], ["lnlqp", "0758"], ["iudjn", "0809"], ["jwgrgxox", "0848"], ["lnlqp", "0901"], ["jwgrgxox", "0807"], ["dk", "0824"], ["dk", "0807"]]
access_times = [["uixav", "0510"], ["zbggqxck", "0545"], ["hyxoa", "0619"], ["uixav", "0517"], ["zbggqxck", "0609"], ["zbggqxck", "0527"], ["zkjxcrd", "0545"], ["uixav", "0617"], ["uixav", "0530"]]
console.log(findHighAccessEmployees(access_times))