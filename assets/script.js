let newsApiKey = "fff8c721744e4546a700ddf9fd65b182"
let newsApiUrl = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${newsApiKey}`

fetch(newsApiUrl).then((res) => {
  return res.json()
}).then((data) => {
  data.articles.forEach(article => {
    document.getElementById("article-content-list").innerHTML += `
    <div>
    <h2>
      <a href=${article.url} target="_blank">
      ${article.title}
      </a>
    </h2>
    <p>Berita bersumber dari ${article.author}.</p>
    </div>
    `;
  })
})