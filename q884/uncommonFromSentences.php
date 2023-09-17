<?php
class Solution {

    /**
     * @param String $s1
     * @param String $s2
     * @return String[]
     */
    function uncommonFromSentences($s1, $s2) {
        $words = [];
        $s1a = explode(' ', $s1);
        $s2a = explode(' ', $s2);
        $s3 = array_merge($s1a, $s2a);
        $s3c = array_count_values($s3);
        $sd = array_diff($s1a, $s2a);
        $sd2 = array_diff($s2a, $s1a);
        foreach ($sd as $word) {
            if ($s3c[$word] <= 1) {
                $words[] = $word;
            }
        }
        foreach ($sd2 as $word) {
            if ($s3c[$word] <= 1) {
                $words[] = $word;
            }
        }
        return $words;
    }
}

$s1 = "this apple is sweet";
$s2 = "this apple is sour";
$s1 = "apple apple";
$s2 = "banana";
var_dump((new Solution())->uncommonFromSentences($s1, $s2));
