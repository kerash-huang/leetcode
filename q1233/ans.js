/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
    let list = [];
    folder.forEach(item => {
        let sub = item.split("/");
        let isSub = false;
        for (let j = 0; j < list.length; j++) {
            let currItem = list[j];
            isSub = false;
            let currSubIndex = 0;
            currItem.forEach((fl, i) => {
                // console.log(fl, i, currSubIndex);
                if (!isSub && currSubIndex == i && currItem[i] == sub[i]) {
                    isSub = true;
                    currSubIndex++;
                } else if (isSub && currItem[i] == sub[i]) {
                    currSubIndex++;
                } else {
                    isSub = false;
                }
                // console.log(isSub);
            });
            if (isSub) {
                break;
            }
        }
        if (!isSub) {
            list.push(sub);
        }
        // console.log(list);
    });
    let res = [];
    list.forEach(item => {
        res.push(item.join("/"));
    });
    return res;
    // console.log(list)
};


folder = ["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]

console.log(removeSubfolders(folder));