## 1647. Minimum Deletions to Make Character Frequencies Unique
### Question:
A string s is called good if there are no two different characters in s that have the same frequency.

Given a string s, return the minimum number of characters you need to delete to make s good.

The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.


### Thinking:
計算每個單字的字元數量後，跑迴圈並檢查數量是否重複，若有重複就 -1 
直到字元不重複或者數字已經為 0

## Leetcode Submission Result
* Runtime: 114 ms
* Memory 26.6 MB

後記簡略查看一些別人的解答，首先發現有直接計算字元數量的方法

https://www.php.net/manual/en/function.count-chars.php
```
count_chars(string $string, int $mode = 0): array|string
```
應該可以減少時間跟記憶體用量，剩下的應該就是邏輯怎麼寫得更好而已。
