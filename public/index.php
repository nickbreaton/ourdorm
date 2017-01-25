<?php require '../vendor/autoload.php' ?>
<?php require './sms.php' ?>
<?php require './canvas.php' ?>
<!DOCTYPE html>
<html>
<head>
  <title>Send SMS</title>
</head>
<body>
  <!-- Get information from Canvas -->
  <?php $user = canvas('users/self') ?>
  <?php $upcomingAssignments = canvas('users/self/upcoming_events') ?>

  <!-- Print header -->
  <header>
    <h1>
      <?php echo $user['short_name'] ?>
    </h1>
    <img src="<?php echo $user['avatar_url'] ?>" width="100" alt="picture of you"/>
    <h2>
      Upcoming Assignments
    </h2>
  </header>

  <!-- List all upcoming assignments and their links -->
  <main>
    <?php foreach ($upcomingAssignments as $i => $assignment) { ?>
    <p>
      <strong>
        <a href="<?php echo $assignment['assignment']['html_url'] ?>">
          <?php echo $assignment['title'] ?>
        </a>
      </strong>
      <br/>
      <span><?php echo $assignment['assignment']['due_at'] ?></span>
      <br/>
    </p>
    <?php } ?>
  </main>

</body>
</html>
