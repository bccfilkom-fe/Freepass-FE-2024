import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

function Ingredients() {
  const [listIngredients, setListIngredients] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Added state for search query

  const getListIngredients = async () => {
    try {
      const response = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
      setListIngredients(response.data.meals);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchChange = (event) => {
    // Handler for search input
    setSearchQuery(event.target.value);
  };

  const filteredIngredients = listIngredients.filter((item) => {
    // Filter the list based on the search query
    return item.strIngredient.toLowerCase().includes(searchQuery.toLowerCase());
  });

  useEffect(() => {
    getListIngredients();
  }, []);

  return (
    <>
      <Layout>
        <div className="w-full ">
          <div className="bg-white py-4 px-3 my-4 rounded-xl flex bg-red-200">
            <h4 className="font-medium text-black">
              Welcome Back&nbsp;
              <span className="font-bold text-orange-600">Chef Nanda!</span>
            </h4>
          </div>
          <div className="flex flex-col-reverse laptop:flex-row items-center justify-between w-full mb-8">
            {/* <h4>All Ingredients</h4> */}
            <form>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="w-full p-4 pl-4 border rounded-xl focus:ring-red-500 focus:border-red-300 dark:bg-white dark:focus:border-red-300"
                  placeholder="Let's seacrh Ingredients"
                  required
                  onChange={handleSearchChange} // Added onChange handler
                />
              </div>
            </form>
          </div>

          <div class="grid gap-3 md:grid-cols-4 sm:grid-cols-2">
            {filteredIngredients.map((item) => (
              <Link key={item.idIngredients} to={`/ingredients/${item.strIngredient}`}>
                <div className="bg-white text-gray-700 hover:bg-red-400 hover:text-white rounded-md px-3 py-3 mx-3 text-sm font-medium text-center">{item.strIngredient}</div>
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Ingredients;
