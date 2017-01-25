<?php require '../vendor/autoload.php'; ?>
<?php require './sms.php' ?>
<!DOCTYPE html>
<html>
<head>
  <title>Send SMS</title>
</head>
<body>
  <?php
  $canvas = json_decode(file_get_contents('../canvas.json'), true);
  $client = new \GuzzleHttp\Client();

  $res = $client->get('https://uncc.instructure.com/api/v1/users/self/upcoming_events', [
    'headers' => [
      'Content-Type' => 'application/json',
      'Authorization' => 'Bearer '.$canvas['token']
    ]
  ]);

  $upcomingEvents = json_decode($res->getBody(), true);

  $res = $client->get('https://uncc.instructure.com/api/v1/users/self', [
    'headers' => [
      'Content-Type' => 'application/json',
      'Authorization' => 'Bearer '.$canvas['token']
    ]
  ]);

  $user = json_decode($res->getBody(), true);

  echo '<h1>'.$user['short_name'].'</h1>';
  echo '<img src="'.$user['avatar_url'].'" width="100"/>';

  echo '<h2>Upcoming Assignments</h2>';

  foreach ($upcomingEvents as $i => $event) {
    echo  '<p>'.
            '<a href="'.$event['assignment']['html_url'].'">'.
              '<strong>'.$event['title'].'</strong>'.' '.
              '<span>'.$event['assignment']['due_at'].'</span>'.
            '</a>'.
          '</p>';
  }

  // sendSMS(null, null, null, $upcomingEvents[0]['title']);
  ?>
</body>
</html>
