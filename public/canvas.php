<?php
function canvas($endpoint) {
  // load config token from file
  $canvas = json_decode(file_get_contents('../canvas.json'), true);
  // create HTTP client
  $client = new \GuzzleHttp\Client();
  // make GET request to canvas at given endpoint
  $res = $client->get('https://uncc.instructure.com/api/v1/'.$endpoint, [
    'headers' => [
      'Content-Type' => 'application/json',
      'Authorization' => 'Bearer '.$canvas['token']
    ]
  ]);
  // convert JSON response to Array
  return json_decode($res->getBody(), true);
}
