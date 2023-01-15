import React, { useState } from "react";
import { Link } from "react-router-dom";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
import translations from "../translations";

function Home({ lang }: { lang: string }) {
  const key = lang as string;
  const [opacity, setOpacity] = useState(0);

  setTimeout(() => {
    setOpacity(1);
  }, 200);

  return (
    <div
      style={{
        border: "solid 1px black",
        borderRadius: "25px",
        minHeight: "60%",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: " rgb(255, 255, 255, 0.9)",
        padding: "0px 20px 20px",
        opacity: opacity,
        transition: "opacity 2s",
      }}
    >
      <div>
        <h1>{translations.header[key as keyof typeof translations.header]}</h1>
        <p>{translations.webDesc[key as keyof typeof translations.webDesc]}</p>
        <Link
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          to="/blog"
        >
          {translations.lets_go[key as keyof typeof translations.lets_go]}{" "}
          <DoubleArrowRoundedIcon />
        </Link>
      </div>
    </div>
  );
}

export default Home;
