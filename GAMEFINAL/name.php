<html>
<head>
  
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Operative Access" />
  <meta name="keywords" content="Login, Flat, Dark, HTML5, CSS3" />
  <meta name="author" content="I.Quinn" />
  <title>Operative Access</title>
  <link href="css/namecss.css" rel="stylesheet" type="text/css">
  <link href='http://fonts.googleapis.com/css?family=Ubuntu+Mono:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
</head>
<body background="assets/daftpunk1.jpg">
  <div class="box">
    <div class="content">
		<form action="scoresubmit.php" method="GET">
      <h1>Your Score is <?php echo $_COOKIE['points'];?></h1>
      <h2>Please Enter your name below</h2>
      <input class="field" type="text" name="name" placeholder="name"><br>
      <input class="btn" type="submit" value="Submit">
		</form>
	</div>
  </div>
</body>
</html>