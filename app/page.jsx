"use client";

import { useEffect, useState } from "react";
import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";
import Loading from "./loading";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();

      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>Welcome to Course Directory</h1>
          <CourseSearch getSearchResults={(result)=>setCourses(result)}/>
          <Courses courses={courses} />
        </>
      )}
    </>
  );
};

export default HomePage;
