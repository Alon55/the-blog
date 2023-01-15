import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { getPostData } from "../service";

export default function Post({ lang }: { lang: string }) {
  const { id } = useParams();
  const [data, setData] = useState<{
    name: string;
    icon: string;
    description: { gb: string; gr: string; th: string };
  }>();

  useEffect(() => {
    setData(getPostData(id));
  }, [id]);

  const key = lang as string;

  return (
    <Card sx={{ maxWidth: 800, margin: "auto" }}>
      <CardActionArea>
        <img
          style={{ margin: "30px calc(50% - 50px) 20px" }}
          height="100"
          src={data?.icon}
          alt={data?.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data?.description[key as keyof typeof data.description]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
