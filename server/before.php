<?php
$index = $_GET['day'];
$date = date('Ymd');
$url = file_get_contents("http://news.at.zhihu.com/api/2/news/before/".($date-$index+1));
$res = json_decode($url, true);
$date = $res['display_date'];
$news = $res['news'];
$i = 0;
foreach ($news as &$val) {
  $news_list[$i]['title'] = $news[$i]['title'];
  $news_list[$i]['id'] = $news[$i]['id'];
  $i+=1; 
}
$data['date'] = $date;
$data['news'] = $news_list;
echo json_encode($data);
?>