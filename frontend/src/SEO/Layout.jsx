import React from 'react';
import {Helmet} from "react-helmet";

const Layout = ({children, description, title, keywords, author}) => {
  return (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta name="author" content={author}/>
            <title>{title}</title>
        </Helmet>
        <div>
            {children}
        </div>
    </div>
  )
}

Layout.defaultProps = {
    title : "JobSeekr - Find Your Perfect Job Today",
    author : "Nimish Dureja",
    description : "JobSeekr helps you find your perfect job quickly and easily. Explore job opportunities, receive personalized job recommendations, and start your career journey today. Search for jobs by location, industry, and more.",
    keywords: "jobs, job search, career opportunities, job listings, find jobs, job openings, employment, job seeker, apply for jobs, job vacancies, job search engine, hiring now, job opportunities, professional jobs, local jobs, online jobs, remote jobs"
}

export default Layout