<?php
require_once('config.php');

if (isset($_POST['isTrue']) && $_POST['isTrue'] === 'true') {

    $xarr_params = array();
    $xarr_params["fetcherCode"] = $_POST['fetcherCode'];
    $xarr_params["fetcherName"] = $_POST['fetcherName'];
    $xarr_params["contactNum"] = $_POST['contactNum'];
    $xarr_params["regDate"] = $_POST['regDate'];
    $xarr_params["isActive"] = $_POST['isActive'];

    PDO_InsertRecord($link_id, "fetcherfile", $xarr_params, true);

    $students = $_POST['students'];

    foreach ($students as $student) {
        $xarr = array();
        $xarr['studentCode'] = $student['studentCode'];
        $xarr["relationship"] = $student['relation'];
        $xarr["fetcherCode"] = $student['fetcherCode'];

        PDO_InsertRecord($link_id, "details", $xarr, true);
    }
}
