// script.js
const newsGrid = document.querySelector('.news-grid');

// 示例新闻数据
const newsData = [
    /*  ...  */
];

function createNewsItem(news) {
    // ... (之前的代码)

    const button = document.createElement('button');
    button.textContent = '阅读更多';
    // 添加点击事件处理程序
    button.addEventListener('click', () => {
        //  跳转到新闻详情页面，并将新闻 ID 或标题作为参数传递
        window.location.href = `news-detail.html?title=${encodeURIComponent(news.title)}`;
    });


    newsItem.appendChild(button);  //  将按钮添加到 newsItem 中

    return newsItem;
}