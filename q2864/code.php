<?php
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function maximumOddBinaryNumber($s) {
        $sa = str_split($s);
        arsort($sa);
        array_shift($sa);
        $sc = implode('', $sa);
        return $sc . '1';

    }
}

echo (new Solution())->maximumOddBinaryNumber('10');