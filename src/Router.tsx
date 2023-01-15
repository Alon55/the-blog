import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Post";

export default function Router() {
  const [lang, setLang] = useState<string>("gb");

  const handleLang = (lang: string) => setLang(lang);

  return (
    <BrowserRouter>
      <AppBar handleLang={handleLang} lang={lang} />
      <div
        style={{
          padding: "60px 10%",
          height: "100vh",
          backgroundImage:
            'url("https://thumbs.dreamstime.com/b/vector-cryptocurrency-pattern-seamless-background-illustration-114473887.jpg")',
        }}
      >
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/blog" element={<Blog lang={lang} />} />
          <Route path="/post/:id" element={<Post lang={lang} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
