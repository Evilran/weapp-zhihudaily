<?php
header('Content-type:text/json');
$url = file_get_contents("http://news.at.zhihu.com/api/2/news/latest");
$res = json_decode($url, true);
$date = $res['display_date'];
$top_stories = $res['top_stories'];
$news = $res['news'];
$i = 0;
foreach ($news as &$val) {
  $news_list[$i]['title'] = $news[$i]['title'];
  $news_list[$i]['id'] = $news[$i]['id'];
  $i+=1; 
}
$j = 0;
foreach ($top_stories as &$val) {
  $banner_list[$j]['title'] = $top_stories[$j]['title'];
  $banner_list[$j]['id'] = $top_stories[$j]['id'];
  $banner_list[$j]['img'] = $top_stories[$j]['image'];
  $j+=1; 
}
$data['date'] = $date;
$data['news'] = $news_list;
$data['banner'] = $banner_list;
echo json_encode($data);
?>