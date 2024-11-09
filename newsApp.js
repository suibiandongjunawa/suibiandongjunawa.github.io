// newsApp.js
document.addEventListener('DOMContentLoaded', () => {
    const newsList = []; // 用于存储新闻的数组（在实际应用中，这将是与服务器交互获取的数据）
    const newsListElement = document.getElementById('news-list');
    const editNewsModal = document.getElementById('edit-news-modal');
    let currentEditNews = null; // 当前正在编辑的新闻
 
    // 模拟从服务器加载新闻
    function loadNews() {
        // 这里只是示例数据，实际应用中应该从服务器获取
        newsList.push({ title: 'MFCUTS官方', date: '2024-11-09', content: '就在今天，MFCUTS官网的新闻发布，成功展开！' });
        newsList.push({ title: '月落花官方', date: '2024-11-09', content: '月落花及MFCUTS社区创始人——随便东君，在今天我们的官网，圆满成功，服务器因为fpr的原因停服1周，抱歉！' });
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
 
    // 关闭编辑模态框（包括通过点击关闭按钮和背景）
    const closeModalButtons = document.getElementsByClassName('close');
    const modalBackground = document.getElementById('edit-news-modal-background'); // 假设有一个背景元素用于关闭模态框
    for (let i = 0; i < closeModalButtons.length; i++) {
        closeModalButtons[i].onclick = () => {
            editNewsModal.style.display = 'none';
        }
    }
    modalBackground.onclick = (e) => {
        // 确保点击事件不在关闭按钮或模态框内容区域上
        if (e.target === modalBackground) {
            editNewsModal.style.display = 'none';
        }
    }
 
    // 删除新闻
    function deleteNews(index) {
        newsList.splice(index, 1);
        renderNewsList();
    }
 
    // 提交新文章表单
    document.getElementById('news-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value.trim(); // 添加trim去除空白
        const date = document.getElementById('date').value.trim();
        const content = document.getElementById('content').value.trim();
        if (title && date && content) { // 检查输入是否有效
            newsList.push({ title, date, content });
            renderNewsList(); // 添加后重新渲染新闻列表
            // 清空表单
            document.getElementById('news-form').reset();
        } else {
            alert('请填写所有字段。');
        }
    });
 
    // 加载新闻数据
    loadNews();
});
