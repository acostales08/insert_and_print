<?php
require_once('include/JSON.php');
require_once('config.php');

if (isset($_GET["isFetch"]) == true) {

    $query = "SELECT * FROM studentfile";
    $stmt = $link_id->prepare($query);
    $stmt->execute();
    $count = $stmt->rowCount() > 0;
    if ($count) {
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if ($data) {
            echo json_encode($data);
        } else {
            $res = array(
                "status" => "error",
                "data" => "something went wrong"
            );
            echo json_encode($res);
        }
    }
}

if (isset($_GET["isFetcher"]) == true) {

    $query = "SELECT fetcherCode FROM fetcherfile";
    $stmt = $link_id->prepare($query);
    $stmt->execute();
    $count = $stmt->rowCount() > 0;
    if ($count) {
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if ($data) {
            echo json_encode($data);
        } else {
            $res = array(
                "status" => "error",
                "data" => "something went wrong"
            );
            echo json_encode($res);
        }
    }
}
