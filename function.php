<?php 

function dd($value){
    echo "<pre>";
    var_dump($value);
    echo "</pre>";

    die();
}

// dd($_SERVER);
echo $_SERVER['REQUEST_URI'];
?>