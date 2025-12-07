import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import NewsView from "./components/pages/NewsView";
export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/world" element={<News title="World News" category="world" />} />
          <Route path="/politics" element={<News title="Politics News" category="politics" />} />
          <Route path="/business" element={<News title="Business News" category="business" />} />
          <Route path="/technology" element={<News title="Technology News" category="technology" />} />
          <Route path="/sports" element={<News title="Sports News" category="sports" />} />
          <Route path="/entertainment" element={<News title="Entertainment News" category="entertainment" />} />
          {/* For news view */}
          <Route path=":category/news/:newsSlug" element={<NewsView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
