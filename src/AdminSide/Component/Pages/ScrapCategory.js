import React, { useState, useEffect } from 'react';
import axios from '../../../utils/axios';
import { baseUrl } from '../../../utils/constants';
import { useNavigate } from 'react-router-dom';

const ScrapCategory = () => {
  const [categories, setCategories] = useState([]);
  const [showForm,setShowForm] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    fetchCategories();
  }, []);
  
  const fetchCategories = async () => {
    try {
      const response = await axios.get('/adminapi/scrapcategory/')
      setCategories(response.data);
      console.log(response.data);
    }
    catch (error){
      console.error(error);
    };
  }

  const changeShow = () => {
    navigate('/addscrapcategory/')
  }
  const redirectToScrapCategoryDetail = (id) => {
    navigate(`/editscrapcategory/${id}`);
  }
  return (
<div className="flex flex-col">
  <div className="flex justify-between items-center bg-opacity-50 bg-green-900 rounded-md p-3">
    <h1 className="text-white right-40">Scrap Category</h1>
      <button
        id="dropdownActionButton"
        className="bg-red-500 hover:bg-red-700 text-white rounded px-20 py-4 transition-colors duration-300"
        type="button"
        onClick={changeShow}
      >
        ADD Category
      </button>
    </div>
  {/* <label>Search</label>
  <input onChange={(e) => setSearchQuery(e.target.value)} type="text"  id="table-search" placeholder="Search here.."/> */}
   <div className="bg-green-800 bg-opacity-80 p-8 rounded-t-md">
  <div className="overflow-x-auto">
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="py-4 px-6 text-white">Id</th>
          <th className="py-2 px-4 text-white">image</th>
          <th className="py-2 px-4 text-white">Name</th>
          <th className="py-2 px-4 text-white">Description</th>
          <th className="py-2 px-4 text-white">Recyclable</th>
          <th className="py-2 px-4 text-white">Edit</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <tr key={category.id}>
            <td className="py-2 px-4">{/* Id content */}</td>
            <td className="py-2 px-4">
              {category.image && (
                <img src={category.image} alt="image" className="w-16 h-16 object-cover rounded" />
              )}
            </td>
            <td className="py-2 px-4">{category.name}</td>
            <td className="py-2 px-4">{category.description}</td>
            <td className="py-2 px-4">{category.recyclable ? "yes" : "no"}</td>
            <td className="py-2 px-4">
              <button onClick={() => redirectToScrapCategoryDetail(category.id)} className="text-blue-600 hover:underline">
                Edit Scrap
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
</div>


  );
};

export default ScrapCategory;