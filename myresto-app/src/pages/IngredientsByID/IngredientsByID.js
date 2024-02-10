import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

function IngredientsByID() {
  const [listIngredientsById, setListIngredientsById] = useState([]);
  const { filter } = useParams();
  console.log(filter);

  const getListIngredientById = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${filter}`);
      setListIngredientsById(response.data.meals);
      console.log(response.data.meals);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getListIngredientById();
  }, [filter]);

  return (
    <>
      <Layout>
        <div class="w-full">
          <div className="bg-white py-4 px-3 mt-4 rounded-xl flex bg-red-200">
            <h4 className="font-medium text-black">
              For ingredients of&nbsp;
              <span className="font-bold text-orange-600">{filter}</span>&nbsp;you can cook..
            </h4>
          </div>

          <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
              {listIngredientsById.map((item) => (
                <Link key={item.idMeal} to={`/meal/${item.idMeal}`}>
                  <a href="#" class="group bg-red-200">
                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img src={item.strMealThumb} alt="" class="h-full w-full object-cover object-center group-hover:opacity-75"></img>
                    </div>
                    {/* <h3 class="mt-4 text-sm text-gray-700">#{item.idMeal}</h3> */}
                    <p class="mt-4 text-lg font-medium text-gray-900">{item.strMeal}</p>
                  </a>
                </Link>
              ))}
              {/* <!-- More products... --> */}
            </div>
          </div>
          {/* </Link>
          ))} */}
        </div>
      </Layout>
    </>
  );
}

export default IngredientsByID;
