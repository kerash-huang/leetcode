## 135. Candy
### Question:
There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

* Each child must have at least one candy.
* Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.



### Thinking:
這題完全沒有想法，就是暴力解，原本寫了第一次 TestCase 前幾個都成功，最後遇到 TLE 所以再改了第二個。（第一次的 code 留在了 candy2）

TLE 的原因是當完全大到小排序時，因為要一直回頭補數量，所以跑 很多個 N 次迴圈導致的，所以第二次的想法就用這個錯誤去思考，一樣是從大到小，但分段去檢查跟分派，當後者比較大的時候就先派發前段，再重置。

>  
> 以自己測試的 TestCase [1, 3, 2, 2, 1] 為例
>
> * 首輪 1 < 3，所以先塞個 1，接著因為 3 > 1，所以先中斷後重置，並記得下次要檢查前一筆的最後一個數量，避免前一個數量大於新的一輪
> 
> * 下一輪，3 > 2 但後面 2 = 2 ，所以擷取 {3 , 2} 的部分，發派 [2, 1]，檢查前一次最後一個數量為 1 ，新的為 2 所以不增加首筆數量，而接著數字是 2 = 2 所以下一輪不重新檢查數量
> 
> * 最後一輪 2 > 1 後就結束，擷取 {2 , 1} 的部分，就是 [2, 1]
> 
> 最後串起來就是 [1,2,1,2,1]，回傳所有陣列的合計 = 7，以此類推。

講得很亂寫的也很亂 ...


## Leetcode Submission Result
* Runtime: 557 ms
* Memory 22.5 MB

大概是倒數 15% 的人 ...

別人的解法都比較好，雖然腦袋有輪廓但是寫不出來，所以只好改暴力解，但這個暴力解解了一小時 ...
