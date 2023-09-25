<?php
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function maximumOddBinaryNumber($s) {
        $sa = str_split($s);
        $count_s = count($sa);
        $sc = array_count_values($sa);
        if ($sc[1] == 1) {
            return str_pad(1, $count_s, '0', STR_PAD_LEFT);
        } else {

            $init = str_pad('', $sc[1] - 1, '1');
            $init = str_pad($init, $count_s, '0');
            $init = substr_replace($init, '1', strlen($init)-1);
            return $init;
        }
    }
}

$s = "101";
$s = "011110101010101011111101010";
echo (new Solution())->maximumOddBinaryNumber($s);
