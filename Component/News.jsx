import React, { useState } from "react";

const News = () => {
  const [preNews, setNews] = useState([]);

  const FetchNews = async () => {
    try {
      const response = await fetch(
        "https://newsdata.io/api/1/latest?apikey=pub_799303bdc11425c46b48de492e92efce83d7b&country=us"
      );
      const data = await response.json();
      console.log(data.results, "Fetched News");
      setNews(data.results || []);
    } catch (err) {
      console.log(err, "Error trying to fetch news");
    }
  };

  return (
    <div>
      <center>
        <button
          type="button"
          className="btn btn-success my-3"
          onClick={FetchNews}
        >
          NEWS!!
        </button>
      </center>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {preNews.map((MyNews, index) => (
            <div className="col" key={MyNews.article_id || index}>
              <div className="card h-100 shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="200"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>{MyNews.title}</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text
                    x="50%"
                    y="50%"
                    fill="#eceeef"
                    dy=".3em"
                    textAnchor="middle"
                  >
                    Thumbnail
                  </text>
                </svg>

                <div className="card-body">
                  <h5 className="card-title">{MyNews.title}</h5>
                  <p className="card-text">
                    {MyNews.description || "No description available."}
                  </p>
                  <a
                    href={MyNews.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Read More...
                  </a>

                  {MyNews.keywords && (
                    <div className="mt-3">
                      <div className="row row-cols-2 g-1">
                        {MyNews.keywords.map((keyword, i) => (
                          <div key={i} className="col">
                            <div className="badge bg-secondary w-100">
                              {keyword}
                            </div>
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                              {MyNews.category}
                              <span class="visually-hidden">
                                unread messages
                              </span>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {preNews.length === 0 && (
            <div className="text-center mt-4">
              Click the "NEWS!!" button to load the latest news.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
