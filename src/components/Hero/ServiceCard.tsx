import * as React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";

interface ServiceCardProps {
  title: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image }) => {
  return (
    <Card sx={{ maxWidth: 180, margin: 2, textAlign: "center" }}>
      <CardMedia
        component="img"
        height="120"
        image={image}
        alt={title}
        sx={{ padding: 1 }}
      />
      <CardContent>
        <h4>{title}</h4>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
