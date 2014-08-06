<?php

ob_start();
$con=mysqli_connect("localhost","Bluesir9","Bluesir9","game");

if(mysqli_connect_errno())
		{
		echo "Failed to connect to Mysql ".mysqli_connect_error();
		}
		
$sql="DELETE FROM leaderboard;";

$query=mysqli_query($con,$sql);

if (!$query)
		{
			die('Error: ' . mysqli_error($con));
		}
		
$url='menu.html';

while(ob_get_status())
{
ob_end_clean();
}

header( "Location: $url" );

?>