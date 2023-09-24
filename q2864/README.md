## 2864. Maximum Odd Binary Number
### Question:
You are given a binary string s that contains at least one '1'.

You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination.

Return a string representing the maximum odd binary number that can be created from the given combination.

Note that the resulting string can have leading zeros.

### Thinking:
* 文字拆陣列
* 大到小排序
* 拿掉左邊第一個（因為最左邊一定為 1）
* 把一個 1 串在後面（因為要奇數，等於把左邊的 1 拿掉放在最後面，1 的數量才會一樣）

## Leetcode Submission Result
簡單想就好了，一開始用 bindec 換來換去，結果測資數字太大就爆了，浪費很多時間