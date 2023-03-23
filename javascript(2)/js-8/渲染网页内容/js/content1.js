// 创建 对象的内容
let data = [
    {
        grade: '高级',
        src: 'images/course01.png',
        title: 'Think PHP 5.0 博客系统实战项目演练',
        num: 111
    },
    {
        grade: '中级',
        src: 'images/course02.png',
        title: 'Android 网络动态图片加载实战',
        num: 222
    },
    {
        grade: '中级',
        src: 'images/course03.png',
        title: 'Angular2大前端商城实战项目演练',
        num: 2345
    },
    {
        grade: '高级',
        src: 'images/course04.png',
        title: 'AndroidAPP实战项目演练',
        num: 45634
    },
    {
        grade: '中级',
        src: 'images/course05.png',
        title: 'AndroidAPP实战项目演练',
        num: 111
    },
    {
        grade: '高级',
        src: 'images/course06.png',
        title: 'AndroidAPP实战项目演练',
        num: 111
    },
    {
        grade: '高级',
        src: 'images/course07.png',
        title: 'AndroidAPP实战项目演练',
        num: 111
    },
    {
        grade: '高级',
        src: 'images/course08.png',
        title: 'AndroidAPP实战项目演练',
        num: 111
    },
]

// 遍历出 对象里的 内容
for (let i = 0; i < data.length; i++) {
    document.write(`
     <li>
        <a href="#">
            <img src=${data[i].src} title="${data[i].title}">
            <h4>
                ${data[i].title}
            </h4>
                <div class="info">
                    <span>${data[i].grade}</span> • <span>${data[i].num}</span>人在学习
            </div>
        </a>
    </li>
    `)
}