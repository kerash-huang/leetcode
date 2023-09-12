<?php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function minDeletions($s) {
        $slist = str_split($s);
        $set = [];
        foreach ($slist as $c) {
            $set[$c] = isset($set[$c]) ? $set[$c] + 1 : 1;
        }
        sort($set);
        $buck = [];
        $delCount = 0;
        foreach ($set as $v) {
            for ($cn = $v; $cn > 0; $cn--) {
                if (!in_array($cn, $buck) and $cn > 0) {
                    $buck[] = $cn;
                    break;
                }
                $delCount++;
            }
        }
        return $delCount;
    }
}

$s = 'ceabaacb';
$solution = new Solution();
echo $solution->minDeletions($s);
