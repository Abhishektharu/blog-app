import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container ml-2 mr-2 px-6  bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          About Us
        </h1>
        <div className="text-gray-700 text-lg space-y-4 leading-7">
          <p>
            Welcome to <span className="font-semibold">Our Blog</span>, your go-to platform for insightful articles, personal stories, and the latest trends in [your niche or theme, e.g., technology, lifestyle, or travel]. We believe in creating content that informs, inspires, and empowers our readers.
          </p>
          <p>
            Our mission is to provide a space where ideas flow freely, where knowledge is shared, and where connections are made. Whether you're here to explore fresh perspectives, learn something new, or simply enjoy well-crafted stories, you're in the right place.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">
            Meet the Team
          </h2>
          <p>
            Behind this blog is a team of passionate writers, curious learners, and creative thinkers. Each of us brings a unique perspective, a set of skills, and a deep commitment to delivering high-quality content.
          </p>
          <p>
            We are dedicated to making this platform a reliable source of knowledge and entertainment, tailored to meet the interests of our diverse audience.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">
            Get in Touch
          </h2>
          <p>
            We value your feedback and love connecting with our readers. Have questions, suggestions, or just want to say hello? Reach out to us via the <span className="font-semibold">Contact Us</span> page or drop us an email at <a href="mailto:contact@ourblog.com" className="text-blue-500 underline">contact@ourblog.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
