<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 收集表单数据
    $name = htmlspecialchars(strip_tags($_POST['name']));
    $minecraft_username = htmlspecialchars(strip_tags($_POST['minecraft_username']));
    $contact = htmlspecialchars(strip_tags($_POST['contact']));
    $message = htmlspecialchars(strip_tags($_POST['message']));

    // 简单的数据验证
    if (empty($name) || empty($minecraft_username) || empty($contact) || empty($message)) {
        die("所有字段都是必填的。");
    }

    // 检查电子邮件格式
    if (!filter_var($contact, FILTER_VALIDATE_EMAIL)) {
        die("无效的电子邮件地址。");
    }

    // 将数据保存到文件（或数据库）
    $data = "姓名: $name\n";
    $data .= "Minecraft用户名: $minecraft_username\n";
    $data .= "联系方式: $contact\n";
    $data .= "留言: $message\n";

    // 指定文件路径
    $file = 'applications.txt';

    // 以追加模式打开文件，并写入数据
    file_put_contents($file, $data . "\n", FILE_APPEND | LOCK_EX);

    // 发送成功消息
    echo "您的申请已成功提交！";
} else {
    // 如果不是POST请求，重定向回表单页面
    header("Location: contact.html");
    exit();
}
?>