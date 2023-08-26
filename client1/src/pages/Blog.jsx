import React from 'react';
import News from '../components/News';
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard';
import BreadCrumb from '../components/BreadCrumb';
import { Tabs } from 'antd';
const Blog = () => {
  return (
    <>
      <Meta title={'Tin Tức'} />
      <BreadCrumb title="Tin tức công nghệ" />
      <div className="container mx-auto">
        <h1 className="mt-2 text-lg leading-8 text-gray-600  mb-4">
          Bao gồm những tin tức mới nhất về các lĩnh vực công nghệ.
        </h1>
        <BlogCard />
        <News />
      </div>
    </>
  );
};

export default Blog;
