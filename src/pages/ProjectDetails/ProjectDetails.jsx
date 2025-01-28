import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const allData = useLoaderData();
  const { id } = useParams();

  const singleData = allData.find((data) => parseInt(id) === data.id);

  return (
    <div className="py-20 w-10/12 mx-auto">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <div className="lg:w-1/2">
          <img src={singleData.image} alt="" />
        </div>
        <div className="p-4 lg:p-10 space-y-4 lg:w-1/2">
          <h1 className="text-3xl font-bold">{singleData.name}</h1>
          <p className="text-sm text-gray-700">{singleData.type}</p>
          <div className="divider"></div>
          <p className="font-medium">{singleData.description}</p>
          <div className="flex items-center gap-52">
            <div>
              <h2 className="text-lg font-medium underline">Technologies</h2>
              <div>
                {singleData.technologies.map((technology, index) => (
                  <ul key={index}>
                    <li>{technology}</li>
                  </ul>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium underline">Tools</h2>
              <div>
                {singleData.tools.map((tool, index) => (
                  <ul key={index}>
                    <li>{tool}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex items-center gap-32">
          <div className="w-1/3">
              <h3 className="text-lg font-medium underline">Github:</h3>
              <p>{singleData.githubRepo}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium underline">Live link</h3>
              <p>{singleData.liveLink}</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
