import React from 'react';

const Card1 = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-8 p-5">
      <div className="w-full md:w-1/2 bg-white p-6 rounded-md shadow-md">
        <img
          src="https://st3.idealista.com/static/common/release/home/resources/img/draw-search/draw-search-small.jpg?20240827-1152"
          alt="Idealista Draw Search"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">Draw your own area</h2>
        <p className="text-gray-600 mb-4">
          Choose the exact area you want to search in on a map so it makes it easy for you to search it on a map.
        </p>
        <a href="#" className="text-blue-600 font-bold hover:underline">
          Start drawing your search
        </a>
      </div>
      <div className="w-full md:w-1/2 bg-white p-6 rounded-md shadow-md">
        <img
          src="https://st3.idealista.com/static/common/release/home/resources/img/put-property/en/put-property-large.jpg?20240827-1152"
          alt="Idealista Put Property"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">Publish your listing for free</h2>
        <p className="text-gray-600 mb-4">
          We give you the first two listings for free. Houses, rooms, offices... there's room for everything!
        </p>
        <a href="#" className="text-blue-600 font-bold hover:underline">
          Add your listing for free
        </a>
      </div>
    </div>
  );
};

export default Card1;
