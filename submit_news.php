<?php
// 数据库连接信息 (请替换为你的数据库信息)
$servername = "your_servername";
$username = "your_username";
$password = "your_password";
$dbname = "your_dbname";

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);

// 检查连接是否成功
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

// 获取表单数据
$title = $_POST["title"];
$date = $_POST["date"];
$content = $_POST["content"];

// SQL 插入语句
$sql = "INSERT INTO news (title, date, content) VALUES ('$title', '$date', '$content')";

if ($conn->query($sql) === TRUE) {
    echo "新文章插入成功";
     header("Location: news.html"); //  重定向到新闻列表页面
     exit();

} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>