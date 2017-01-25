<?php require '../vendor/autoload.php'; ?>
<!DOCTYPE html>
<html>
<head>
  <title>Send SMS</title>
</head>
<body>
  <?php
  $canvas = json_decode(file_get_contents('../canvas.json'), true);
  $client = new \GuzzleHttp\Client();
  $url = 'https://uncc.instructure.com/api/v1/users/self/upcoming_events';
  $res = $client->get($url, [
    'headers' => [
      'Content-Type' => 'application/json',
      'Authorization' => 'Bearer '.$canvas['token']
    ]
  ]);

  $upcomingEvents = json_decode($res->getBody(), true);

  foreach ($upcomingEvents as $i => $event) {
    echo  '<p>'.
            '<a href="'.$event['assignment']['html_url'].'">'.
              '<strong>'.$event['title'].'</strong>'.
              '<span>'.$event['assignment']['due_at'].'</span>'.
            '</a>'.
          '</p>';
  }
  ?>
</body>
</html>
