<?php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function countWays($nums) {
        $totalWay = 0;
        $totalCount = count($nums);
        sort($nums);
        // 不選
        if (0 > $nums[0] and $totalCount < $nums[$totalCount - 1]) {
            echo "不選\n";
            $totalWay++;
        }
        // 全選
        if ($totalCount > $nums[$totalCount - 1] and 0 < $nums[0]) {
            echo "全選\n";
            $totalWay++;
        }
        // 分批選
        for ($i = 1; $i < $totalCount; $i++) {
            // 選幾個人
            echo "選 " . $i . "個人";
            echo ">>> 要大於 " . $nums[$i-1];
            echo "\n";
            echo "沒選 " . ($totalCount - $i) . "個人";
            echo ">>> 要小於 " . $nums[$totalCount - ($i)];
            echo "\n";
            if (
                $i > $nums[$i-1]
                and ($totalCount - $i) < $nums[$totalCount - ($i)]
            ) {
                $totalWay++;
                echo "有唷";
            }
            echo "\n";
            echo "\n";
        }
        return $totalWay;
        // asort($nums);
        // print_r($nums);
        // $cutArray = array_slice($nums, 0, floor($totalCount/2), true);
        // print_r($cutArray);
    }
}

$nums = [6, 0, 3, 3, 6, 7, 2, 7];
$nums = [1, 1];
$nums = [1, 1, 0, 1];
echo (new Solution())->countWays($nums);
