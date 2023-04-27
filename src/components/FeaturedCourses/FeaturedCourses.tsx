import React from "react";
import {
  Grid,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import {
  FeaturedCoursesContainer,
  CourseCard,
  DescriptionContainer,
  GridItem,
} from "./FeaturedCourses.styles";
import { Course } from "./Course";

import { useInView } from "react-hook-inview";
import { motion } from "framer-motion";

const courses: Course[] = [
  {
    title: "Artificial Intelligence Fundamentals",
    image: "https://source.unsplash.com/random/?artificialintelligence,ai",
    description:
      "Learn the basics of artificial intelligence and its applications in the modern world.",
  },
  {
    title: "Web Development with React",
    image: "https://source.unsplash.com/random/?webdevelopment,react",
    description:
      "Master the skills of modern web development using React and its ecosystem.",
  },
  {
    title: "Data Science Essentials",
    image: "https://source.unsplash.com/random/?datascience,python",
    description:
      "Discover the world of data science and learn how to analyze data using Python.",
  },
  {
    title: "Economics",
    image: "https://source.unsplash.com/random/?economics,finance",
    description:
      "Discover the world of finance and learn how to analyze data using Python.",
  },
];
const FeaturedCourses: React.FC = () => {
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
      <FeaturedCoursesContainer>
        <Typography variant="h4" component="h2" gutterBottom pb={5}>
          Featured Courses
        </Typography>
        <Grid container spacing={4}>
          {courses.map((course, index) => (
            <GridItem item key={index} xs={12} sm={6} md={4}>
              <CourseCard>
                <CardMedia
                  component="img"
                  height="140"
                  image={course.image}
                  alt={course.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {course.title}
                  </Typography>
                  <DescriptionContainer>
                    <Typography variant="body2" color="text.secondary">
                      {course.description}
                    </Typography>
                  </DescriptionContainer>
                </CardContent>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ margin: "1rem" }}
                >
                  Enroll Now
                </Button>
              </CourseCard>
            </GridItem>
          ))}
        </Grid>
      </FeaturedCoursesContainer>
    </motion.div>
  );
};

export default FeaturedCourses;
