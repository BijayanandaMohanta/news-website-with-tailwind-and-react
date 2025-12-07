import { Link } from "react-router-dom";
import Breadcrumb from "../layout/Breadcrumb";
import Page from "../layout/Page";
import Pagination from "../layout/Pagination";
import axios from "axios";
import { useEffect, useState } from "react";

const News = ({ title, category }) => {
  const apiKey = "4d98b6122a954cca9d94a0b79d5c5964";
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      // if (category === "world") {
        const response = await axios.get(
          `http://api.mediastack.com/v1/news?access_key=${apiKey}&limit=15&countries=in&categories=${category == 'world' ? 'general' : category}`
        );
        setNewsData(response.data);
      // }
    };
    fetchNews();
  }, [category]);

  return (
    <Page>
      <Breadcrumb title={title} />
      <div className="p-2">
        <div className="flex flex-wrap">
          {newsData && newsData.data
            ? newsData.data.map((item, i) => (
                <div key={i} className="w-1/2 md:w-1/3 lg:w-1/5 p-2 border">
                  <img
                    src={item.image ?? "https://placehold.co/300"}
                    className="h-[10rem] md:h-[20rem] object-cover"
                    alt="News"
                  />
                  <Link to={item.url}>
                    <h2 className="line-clamp-2">{item.title}</h2>
                  </Link>
                  <p className="line-clamp-3">{item.description}</p>
                </div>
              ))
            : Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="w-1/2 md:w-1/3 lg:w-1/5 p-2 border">
                  <img src="https://placehold.co/300" className="h-[10rem] md:h-[20rem] object-cover" alt="News" />
                  <Link to="news/lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-maxime-quis">
                    <h2>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Maxime, quis.
                    </h2>
                  </Link>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                    minus ab iste error, quod saepe! Deleniti similique delectus
                    expedita? Magnam.
                  </p>
                </div>
              ))}
        </div>
      </div>
      <Pagination />
    </Page>
  );
};

export default News;
