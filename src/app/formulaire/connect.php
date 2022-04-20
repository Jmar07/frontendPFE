<?php
    $client = $_POST['client'];
    $module = $_POST['module'];
    $personnel = $_POST['personnel'];
    $accompanying = $_POST['accompanying'];
    $startdate = $_POST['startdate'];
    $enddate = $_POST['enddate'];
    $hr = $_POST['hr'];
    $min = $_POST['min'];
    $starttime = $_POST['starttime'];
    $endtime = $_POST['endtime'];
    $nsheet = $_POST['nsheet'];
    $signature = $_POST['signature'];
    $pic = $_POST['pic'];
    $chauffeur = $_POST['chauffeur'];
    $harrive = $_POST['harrive'];
    $hdepart = $_POST['hdepart'];
    $rapport = $_POST['rapport'];

    $conn = new mysqli('localhost', 'root', '', 'data');
    if ($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into formulaire(client, module, personnel, accompanying, startdate, enddate, hr, min, starttime, endtime, nsheet, signature, pic, chauffeur, harrive, hdepart, rapport) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssdatedatetimetimetimetimeitinyintblobstimetimelongtext", $client, $module, $personnel, $accompanying, $startdate, $enddate, $hr, $min, $starttime, $endtime, $nsheet, $signature, $pic, $chauffeur, $harrive, $hdepart, $rapport);
        $stmt->execute();
        echo "Merci";
        $stmt->close();
        $conn->close();
    }

?>
