import React from "react";
import { Typography, Grid, Avatar } from "@mui/material";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  SuccessStoriesContainer,
  SuccessStoryCard,
} from "./SuccessStories.styles";
import "swiper/css/bundle";
import { useInView } from "react-hook-inview";
import { motion } from "framer-motion";

// Enable Swiper plugins
SwiperCore.use([Navigation, Pagination, Autoplay]);

interface SuccessStory {
  id: number;
  imageUrl: string;
  name: string;
  quote: string;
  accomplishment: string;
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    imageUrl: "https://i.pravatar.cc/150?img=1",
    name: "John Doe",
    quote:
      "LearnSphere has transformed my learning experience! I've never been more engaged and motivated.",
    accomplishment: "Full Stack Web Developer",
  },
  {
    id: 2,
    imageUrl: "https://i.pravatar.cc/150?img=2",
    name: "Jane Smith",
    quote:
      "The personalized learning path has been a game-changer! I'm finally able to learn at my own pace.",
    accomplishment: "Data Scientist",
  },
  {
    id: 3,
    imageUrl: "https://i.pravatar.cc/150?img=3",
    name: "Alice Brown",
    quote:
      "I've never experienced learning like this before! The AI-driven content generation is incredible.",
    accomplishment: "Machine Learning Engineer",
  },
  {
    id: 4,
    imageUrl: "https://i.pravatar.cc/150?img=4",
    name: "Alice Brown",
    quote:
      "I've never experienced learning like this before! The AI-driven content generation is incredible.",
    accomplishment: "Machine Learning Engineer",
  },
];

const SuccessStories: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <SuccessStoriesContainer>
        <Typography variant="h4" component="h2" gutterBottom>
          Success Stories
        </Typography>
        <Typography variant="body1" paragraph>
          Discover how LearnSphere has transformed the learning experience for
          our users.
        </Typography>
        <Swiper
          spaceBetween={10}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {successStories.map((story) => (
            <SwiperSlide key={story.id}>
              <Grid item xs={12} sm={6} md={4}>
                <SuccessStoryCard>
                  <Avatar
                    alt={story.name}
                    src={story.imageUrl}
                    sx={{ width: 150, height: 150, marginBottom: 1 }}
                  />
                  <Typography variant="h6" component="h3">
                    {story.name}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {story.quote}
                  </Typography>
                  <Typography variant="subtitle1">
                    {story.accomplishment}
                  </Typography>
                </SuccessStoryCard>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </SuccessStoriesContainer>
    </motion.div>
  );
};

export default SuccessStories;
