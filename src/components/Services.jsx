import React from "react";
import { servicesData } from "../data/data"; // Adjust path if needed

const Services = () => {
  return (
    <section className="h-fit py-10 px-4 xl:px-5 bg-blue-100/10" id="services">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-mono font-bold border-b-4 border-blue-300 w-fit pb-2">
          Services
        </h1>
        <p className="mt-6 text-lg xl:text-xl text-gray-700 ">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 cursor-pointer hover:bg-blue-100/5"
            >
              {service.icon}
              <h2 className="text-xl font-semibold font-mono">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
