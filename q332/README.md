## 332. Reconstruct Itinerary
### Question:
You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

* For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.



### Thinking:
一看到題目直接就想用遞迴去處理了，但一開始的想法寫得不好，本來是用 & 帶入，發現有問題後才改寫成現在的樣子。（邏輯一樣很髒）

最主要處理的幾個關鍵問題

1. 如有多個路徑時，要選文字序從小到大的選項 (A > B > C) 
2. JFK 一定要在陣列的第一個
3. 注意會有重複票根（submit 後才知道）

除了往下找之外，由於前一個站點可能會有一個以上的下一站，我的做法是先扣掉一次額度後才繼續往下走，所以當下一站無法再繼續時，回來要記得把數量加回來
```
$_routing[$start][$to_target] = isset($_routing[$start][$to_target]) ? $_routing[$start][$to_target] + 1 : 1;
# 這個很髒，所以問了 chatgpt 後拿了解答
# php 7 以上的寫法
$_routing[$start][$to_target] = ($_routing[$start][$to_target] ?? 0) + 1;
# 看起來簡潔許多
```

由於一定有一個解答，所以有很多判斷都沒特別寫出來，只有為了盡量不要出現 notice 所以做很多判斷，但應該有優化的空間。

## Leetcode Submission Result
* Runtime: 53 ms
* Memory 20.2 MB

大概是倒數 20%~40% 的效能排名 ...
排除寫得很髒的ＣＯＤＥ之外，有些狀況只有 submit 後才知道，例如同一區間可能有兩張票這種。
但這題寫了 1.5 hr 有點累，所以髒就髒吧XD
