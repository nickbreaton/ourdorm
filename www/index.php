<?php
require '../vendor/autoload.php';

$worker = new IronWorker\IronWorker('../iron.json');

$payload = array('name' => 'nick');

$worker->postScheduleAdvanced(
  'HelloSMS',       // worker name
  $payload,         // payload
  time() + 1 * 60,  // run at
  "PHP Run",        // label
  60,               // run after
  null,             // end at
  1,                // run times
  0,                // priority
  'default'         // queue
);
?>
