<?php

ob_start();
$name=$_GET['name'];

$score=$_COOKIE['points'];


$con=mysqli_connect("localhost","Bluesir9","Bluesir9","game");


if(mysqli_connect_errno())
		{
		echo "Failed to connect to Mysql ".mysqli_connect_error();
		}
		
$sql1="SELECT PlayerName from leaderboard where PlayerName='".$name."';";
$query1=mysqli_query($con,$sql1);

if(mysqli_num_rows($query1)==0)
{
$sql2="INSERT INTO leaderboard VALUES('".$name."','".$score."');";
$query2=mysqli_query($con,$sql2);
}
else
{
$sql3="SELECT Score from leaderboard where PlayerName='".$name."';";
$query3=mysqli_query($con,$sql3);
$result=mysqli_fetch_array($query3);
if($score>$result['Score'])
{
$sql4="INSERT INTO leaderboard VALUES('".$name."','".$score."');";
$query4=mysqli_query($con,$sql4);
}
}


echo "here1";


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
setcookie("points", '', time()-3600);
header( "Location: $url" );

?>