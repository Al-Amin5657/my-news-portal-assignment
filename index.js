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

const displayNews = news => {
  const newsContainer = document.getElementById('News-container');
  newsContainer.innerHTML = ``;

  console.log(news);
  for (const newsAll of news) {
    // console.log(newsAll);
    const NewsDiv = document.createElement('div');
    // NewsDiv.classList.add('col');
    NewsDiv.innerHTML = `
          
          <div class="row g-4 border border-2 mb-4 rounded-4 bg-white">
            <div class="col-md-4 img-fluid">
              <img src="${newsAll.image_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                   <h5 class="card-title">${newsAll.title}</h5>
                   <p class="card-text">${newsAll.details.slice(0, 400)}</p>
                </div>
               
                 <div class="row mt-2">
                    <div class="d-flex " >
                      <div class="col-md-4 d-flex">
                        <img class="h-50 w-25 rounded-circle mt-2" src="${newsAll.author.img}" alt="">
                         <div class="ms-3">
                           <p class="mb-0 fw-semibold">${newsAll.author ? newsAll.author.name : 'No author name found'}</p>
                           <p>${newsAll.author.published_date}</p>
                         </div>
                      </div>
                        <div class="col-md-4 ms-5 fw-semibold">
                          <p><i class="fa-solid fa-eye"></i> ${newsAll.rating.number} M</p>
                        </div>
                      <button onClick="loadNewsDetailModal('${newsAll._id}')" type="button" class="btn btn-primary h-2 mb-3 mt-3" data-bs-toggle="modal" data-bs-target="#loadNewsDetails">News Details</button>
                    </div> 
                     
                 </div>  
          </div>
          `;
    newsContainer.appendChild(NewsDiv);
  }

}
loadNews();