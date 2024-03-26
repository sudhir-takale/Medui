import React from "react";

const Blogs = () => {
  return (
    <>
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                "Stay Updated: Our Latest News and Updates"
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <BlogCard
              date="Mar 25, 2024"
              CardTitle="Webinar on Healthcare Data Security"
              CardDescription="Join us for an informative webinar on healthcare data security, where industry experts will discuss best practices for protecting personal health records in the cloud. Register now to learn how our authentication scheme can safeguard your sensitive health data."
              image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Featured in Healthcare IT Magazine"
              CardDescription="We're honored to be featured in Healthcare IT Magazine for our innovative approach to healthcare authentication."
              image="https://i.ibb.co/Y23YC07/image-02.jpg"
            />
            <BlogCard
              date="Mar 22, 2024"
              CardTitle="Release of New Authentication Features"
              CardDescription="We're pleased to introduce new features to our authentication solution, further enhancing security and user experience. The latest update includes customizable authentication options, improved encryption algorithms, and enhanced monitoring capabilities."
              image="https://i.ibb.co/7jdcnwn/image-03.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                {date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
