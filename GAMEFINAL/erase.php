<?php
ob_start();
$name=$_GET['name'];
$con=mysqli_connect("localhost","Bluesir9","Bluesir9","game");
if(mysqli_connect_errno())
		{
		echo "Failed to connect to Mysql ".mysqli_connect_error();
		}
		
$sql1="DELETE FROM leaderboard where PlayerName='".$name."';";
$query1=mysqli_query($con,$sql1);

if (!$query1)
		{
			die('Error: ' . mysqli_error($con));
		}

mysqli_close($con);
		echo "here2";
$url='menu.html';

while(ob_get_status())
{
ob_end_clean();
}

header( "Location: $url" );
?>
