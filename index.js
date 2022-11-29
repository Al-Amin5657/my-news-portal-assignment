const loadNews = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
        .then(res => res.json())
        .then(data => displyNav(data.data))

}

const displyNav = news => {
    const displyNews = document.getElementById('header-container');
    // console.log(news.news_category[0]);
    for (newsAll in news) {
        const NavDiv = document.createElement('div');
        NavDiv.innerHTML = `
         <div class="d-flex">
            <p onclick="loadNewsDetails('${news.news_category[0].category_id}')" class="me-5 ms-5">${news.news_category[0].category_name}</p>
            <p onclick="loadNewsDetails('${news.news_category[1].category_id}')" class="me-5">${news.news_category[1].category_name}</p>
            <p onclick="loadNewsDetails('${news.news_category[2].category_id}')" class="me-5">${news.news_category[2].category_name}</p>
            <p onclick="loadNewsDetails('${news.news_category[3].category_id}')" class="me-5">${news.news_category[3].category_name}</p>
            <p onclick="loadNewsDetails('${news.news_category[4].category_id}')" class="me-5">${news.news_category[4].category_name}</p>
            <p onclick="loadNewsDetails('${news.news_category[5].category_id}')" class="me-5">${news.news_category[5].category_name}</p>
            <p onclick="loadNewsDetails('${news.news_category[6].category_id}')" class="me-5">${news.news_category[6].category_name}</p>
            <p onclick="loadNewsDetails('${news.news_category[7].category_id}')" class="me-5">${news.news_category[7].category_name}</p>
         </div>
      `;
        displyNews.appendChild(NavDiv);
    }

}

const loadNewsDetails = category_id => {
    console.log(category_id);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.data))
}
loadNews();