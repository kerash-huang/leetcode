<?php
class Solution {
    function shortestPathLength($graph) {
        $path_tree = [];
        foreach ($graph as $node_value => $node_tree) {
            $path_tree[$node_value] = $path_tree[$node_value] ?? [];
            foreach ($node_tree as $next_node) {
                $path_tree[$node_value][] = $next_node;
                $path_tree[$next_node] = $path_tree[$next_node] ?? [];
            }
        }
        print_r($path_tree);
    }
    /**
     * @param Integer[][] $graph
     * @return Integer
     */
    function shortestPathLength2($graph) {
        $debug_i = 0;
        $cGraph = $graph;
        uasort($cGraph, function ($a, $b) {
            return count($a) > count($b);
        });
        print_r($cGraph);
        $position_array  = array_keys($cGraph);
        $start_position = array_shift($position_array);
        $go_path = [$start_position];
        $next_position_set = $cGraph[$start_position] ?? [];
        unset($cGraph[$start_position]);
        do {
            if ($next_position_set == 0) {
                unset($cGraph[$start_position]);
                $start_position = $go_path[count($go_path) - 1];
            } else {
                echo "GOPATH;;;;;" . json_encode($go_path);
                echo "\n";
                echo "CG;;;;;" . json_encode($cGraph);
                echo "\n==================\n";
                foreach ($next_position_set as $index => $next_node) {
                    if (!isset($cGraph[$next_node])) {
                        unset($cGraph[$start_position][$index]);
                    } else {
                        if (in_array($next_node, $go_path)) {
                            continue;
                        }
                        $start_position = $next_node;
                        $go_path[] = $next_node;
                    }
                }
            }
            $next_position_set = $cGraph[$start_position] ?? [];
            if ($debug_i > 10) {
                print_r($cGraph);
                echo "STOPED";
                var_dump($go_path);
                die();
            }
            $debug_i++;
        } while (count(array_unique($go_path)) < count($graph));
        var_dump($go_path);
        return count($go_path);
    }
}

$s  = [[1], [0, 2, 4], [1, 3, 4], [2], [1, 2]];
$solution = new Solution();
echo $solution->shortestPathLength($s);
