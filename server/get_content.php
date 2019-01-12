<?php
$_POST['id'];
$webcode = file_get_contents("http://daily.zhihu.com/api/2/news/".$_POST['id']);
$html = json_decode($webcode, true);
echo $html['body'];
echo "\n";
?>
