import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const allData = useLoaderData();
  const { id } = useParams();

  const singleData = allData.find((data) => parseInt(id) === data.id);

  return (
    <div className="py-20 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <div className="lg:w-1/2">
          <img src={singleData.image} alt="" />
        </div>
        <div className="p-4 lg:py-10 lg:pl-10 space-y-4 lg:w-1/2">
          <h1 className="text-3xl font-bold">{singleData.name}</h1>
          <p className="text-sm text-gray-700">{singleData.type}</p>
          <div className="divider"></div>
          <p className="font-medium">{singleData.description}</p>
          <div className="flex items-start gap-10 md:gap-36">
            <div>
              <h2 className="text-lg font-medium underline">Technologies</h2>
              <div className="">
                {singleData.technologies.map((technology, index) => (
                  <ul className="ml-4" key={index}>
                    <li className="list-disc">{technology}</li>
                  </ul>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium underline">Tools</h2>
              <div>
                {singleData.tools.map((tool, index) => (
                  <ul className="" key={index}>
                    <li className="list-disc">{tool}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex items-center gap-4">
            <div className="w-1/2">
              <h3 className="text-lg font-medium underline">Github:</h3>
              <p className="break-words">{singleData.githubRepo}</p>
            </div>
            <div>
              <a
                href={singleData.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium underline text-blue-600 hover:underline"
              >
                Live link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
