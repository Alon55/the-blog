import React, { useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { getBlogData } from "../service";
import translations from "../translations";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Blog({ lang }: { lang: string }) {
  const [blogArr, setBlogArr] = useState<
    {
      id: number;
      name: string;
      icon: string;
      summary: { gb: string; gr: string; th: string };
    }[]
  >([]);

  const key = lang as string;

  useEffect(() => {
    setBlogArr(getBlogData);
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {blogArr.map((item) => (
          <Grid item xs={12} sm={4} md={4} key={item.id}>
            <Item>
              <h3>{item?.name}</h3>
              <img style={{ width: 40 }} src={item.icon} alt={item.name} />
              <p>{item.summary[key as keyof typeof item.summary]}</p>
              <Link to={`/post/${item.id}`}>
                {
                  translations.read_more[
                    key as keyof typeof translations.read_more
                  ]
                }
              </Link>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
