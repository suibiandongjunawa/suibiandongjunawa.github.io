// newsApp.js
document.addEventListener('DOMContentLoaded', () => {
    const newsForm = document.getElementById('news-form');
    const newsList = document.getElementById('news-list');

    // 从localStorage获取新闻数据并渲染到页面上
    function renderNewsList() {
        const newsData = JSON.parse(localStorage.getItem('newsData') || '[]');
        newsList.innerHTML = ''; // 清空列表
        newsData.forEach((article, index) => {
            const listItem = document.createElement('li');
            const title = document.createElement('h3');
            const date = document.createElement('small');
            const content = document.createElement('p');

            title.textContent = article.title;
            date.textContent = `发布于: ${article.date}`;
            content.textContent = article.content;

            listItem.appendChild(title);
            listItem.appendChild(date);
            listItem.appendChild(content);

            newsList.appendChild(listItem);
        });
    }

    // 初始化新闻列表
    renderNewsList();

    // 处理表单提交
    newsForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const date = document.getElementById('date').value;
        const content = document.getElementById('content').value;

        // 将新闻数据存储到localStorage
        const newsData = JSON.parse(localStorage.getItem('newsData') || '[]');
        newsData.push({ title, date, content });
        localStorage.setItem('newsData', JSON.stringify(newsData));

        // 清空表单并更新新闻列表
        newsForm.reset();
        renderNewsList();

        alert('文章发布成功！');
    });
});