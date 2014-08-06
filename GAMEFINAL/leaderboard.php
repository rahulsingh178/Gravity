<html>
	<head>
		<title>Leaderboard</title>
		<style type="text/css">
			
			table
			{
			
			margin :0 auto;
			}
			
			th 
			{
			font-family: Arial, Helvetica, sans-serif;
			font-size: 2.2em;
			background: #666;
			color: #FFF;
			padding: 2px 6px;
			border-collapse: separate;
			border: 1px solid #000;
			}

			td 
			{
			font-family: Arial, Helvetica, sans-serif;
			font-size: 2.2em;
			border: 1px solid #DDD;
			}
		</style>
	</head>
	<body >
<?php
$con=mysqli_connect("localhost","Bluesir9","Bluesir9","game");

if(mysqli_connect_errno())
		{
		echo "Failed to connect to Mysql ".mysqli_connect_error();
		}
		
$sql="SELECT * FROM leaderboard GROUP BY score DESC LIMIT 0,10;";
$query=mysqli_query($con,$sql);
if (!$query)
		{
			die('Error: ' . mysqli_error($con));
		}
//echo "1 record added";

echo "<table border='0'>
<tr>
<th>Player</th>
<th>Score</th>
</tr>";

while($row = mysqli_fetch_array($query))
  {
  echo "<tr>";
  echo "<td>" . $row['PlayerName'] . "</td>";
  echo "<td>" . $row['Score'] . "</td>";
  echo "</tr>";
  }
echo "</table>";	
mysqli_close($con);
?>
</body>
</html>