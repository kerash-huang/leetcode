<?php
class Solution {

    /**
     * @param String[][] $tickets
     * @return String[]
     */
    function findItinerary($tickets) {
        $_routing_set = [];
        foreach ($tickets as $ticket) {
            $from = $ticket[0];
            $to = $ticket[1];
            $_routing_set[$from][$to] = isset($_routing_set[$from][$to]) ? $_routing_set[$from][$to] + 1 : 1;
        }
        foreach ($_routing_set as $from_key => $to_list) {
            ksort($to_list);
            $_routing_set[$from_key] = $to_list;
        }
        $new_routing = ['JFK'=>$_routing_set['JFK']];
        unset($_routing_set['JFK']);
        ksort($_routing_set);
        $_routing_set = array_merge($new_routing, $_routing_set);
        $result = [];
        foreach ($_routing_set as $p_from => $p_to) {
            $result = $this->arrange($p_from, $_routing_set);
            if ($result) {
                break;
            }
        }
        return $result;
    }

    function arrange($start, $_routing) {
        $_routing = array_filter($_routing, function ($v) {
            return count($v) > 0;
        });
        $u = [];
        $n = [];
        if (!isset($_routing[$start]) and count($_routing) <= 0) {
            return [$start];
        }
        if (!isset($_routing[$start])) {
            return null;
        }
        foreach ($_routing[$start] as $to_target => $nance) {
            $_routing[$start][$to_target]--;
            if ($_routing[$start][$to_target] == 0) {
                unset($_routing[$start][$to_target]);
            }
            if (count($_routing[$start]) <= 0) {
                unset($_routing[$start]);
            }
            $n = $this->arrange($to_target, $_routing);
            if ($n) {
                $u = array_merge([$start], $n);
                break;
            } else {
                $_routing[$start][$to_target] = ($_routing[$start][$to_target] ?? 0) + 1;
            }
        }
        $_routing = array_filter($_routing, function ($v) {
            return count($v) > 0;
        });

        if (!$n and count($_routing) > 0) {
            return null;
        }
        return $u;
    }
}

$tickets = [["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]];
$tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]];
$tickets = [["JFK", "ATL"], ["ATL", "JFK"]];
$tickets = [["EZE", "AXA"], ["TIA", "ANU"], ["ANU", "JFK"], ["JFK", "ANU"], ["ANU", "EZE"], ["TIA", "ANU"], ["AXA", "TIA"], ["TIA", "JFK"], ["ANU", "TIA"], ["JFK", "TIA"]];
var_dump((new Solution())->findItinerary($tickets));
