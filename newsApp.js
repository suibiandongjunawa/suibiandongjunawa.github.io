// newsApp.js
document.addEventListener('DOMContentLoaded', () => {
    const newsList = []; // 用于存储新闻的数组（在实际应用中，这将是与服务器交互获取的数据）
    const newsListElement = document.getElementById('news-list');
    const editNewsModal = document.getElementById('edit-news-modal');
    let currentEditNews = null; // 当前正在编辑的新闻

    // 模拟从服务器加载新闻
    function loadNews() {
        // 这里只是示例数据，实际应用中应该从服务器获取
        newsList.push({ title: '新闻标题1', date: '2023-10-01', content: '新闻内容1' });
        newsList.push({ title: '新闻标题2', date: '2023-10-02', content: '新闻内容2' });
        renderNewsList();
    }

    // 渲染新闻列表
    function renderNewsList() {
        newsListElement.innerHTML = '';
        newsList.forEach((news, index) => {
            const li = document.createElement('li');
            li.textContent = `${news.title} - ${news.date}`;
            const editButton = document.createElement('button');
            editButton.textContent = '编辑';
            editButton.onclick = () => editNews(news);
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '删除';
            deleteButton.onclick = () => deleteNews(index);
            li.appendChild(editButton);
            li.appendChild(deleteButton);
            newsListElement.appendChild(li);
        });
    }

    // 编辑新闻
    function editNews(news) {
        currentEditNews = news;
        document.getElementById('edit-title').value = news.title;
        document.getElementById('edit-date').value = news.date;
        document.getElementById('edit-content').value = news.content;
        editNewsModal.style.display = 'block';
    }

    // 更新新闻（提交编辑表单）
    document.getElementById('edit-news-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('edit-title').value;
        const date = document.getElementById('edit-date').value;
        const content = document.getElementById('edit-content').value;
        currentEditNews.title = title;
        currentEditNews.date = date;
        currentEditNews.content = content;
        editNewsModal.style.display = 'none';
        renderNewsList(); // 重新渲染新闻列表以显示更新
    });

    // 关闭编辑模态框
    const closeModalButtons = document.getElementsByClassName('close');
    for (let i = 0; i < closeModalButtons.length; i++) {
        closeModalButtons[i].onclick = () => {
            editNewsModal.style.display = 'none';
        }
    }

    // 删除新闻
    function deleteNews(index) {
        newsList.splice(index, 1);
        renderNewsList();
    }

    // 显示添加新文章的表单（这里已经直接在HTML中显示了，所以不需要额外代码）

    // 提交新文章表单（需要添加）
    document.getElementById('news-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const date = document.getElementById('date').value;
        const content = document.getElementById('content').value;
        newsList.push({ title, date, content });
        renderNewsList(); // 添加后重新渲染新闻列表
        // 清空表单
        document.getElementById('news-form').reset();
    });

    // 加载新闻数据
    loadNews();
});
