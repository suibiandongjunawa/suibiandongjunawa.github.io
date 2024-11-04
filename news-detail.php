<!DOCTYPE html>
<html lang="zh-CN">
<head>

    <title>新闻详情 - 月落花</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    </header>
    </nav>

    <main>
        <article id="news-detail">
            <?php
            // ... (数据库连接代码)
           $id = $_GET['id'];

           $sql = "SELECT * FROM news WHERE id = $id";
           $result = $conn->query($sql);


            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
           ?>
                <h2><?php echo $row['title']; ?></h2>
                <p class="news-date"><?php echo $row['date'] ?></p>
                <div class="news-content"><?php echo $row['content']; ?></div>

           <?php
            } else {
           ?>
                <p>找不到这篇文章。</p>

           <?php
               }
               $conn->close();
           ?>


        </article>
    </main>
    </footer>

</body>
</html>