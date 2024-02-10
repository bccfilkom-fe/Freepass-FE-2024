import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";

function Meal() {
  const [listMeal, setListMeal] = useState([]);
  const [listIngredientsAndMeasure, setListIngredientsAndMeasure] = useState([]);
  const { id } = useParams();
  console.log(id);

  const getListMeal = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      setListMeal(response.data.meals);
      console.log(response.data.meals);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getListIngredientsAndMeasure = async () => {
    const ingredients = [];
    const measures = [];

    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;

      if (id[ingredientKey] && id[measureKey]) {
        ingredients.push(id[ingredientKey]);
        measures.push(id[measureKey]);
      }
    }

    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      setListIngredientsAndMeasure(response.data);
      console.log(response.data.meals);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getListMeal();
    // setIngredientsAndMeasures(newIngredientsAndMeasures);
  }, [id]);

  return (
    <>
      <Layout>
        <div class="w-full">
          {listMeal.map((item) => (
            <>
              <div className="bg-white py-4 px-3 my-4 rounded-xl flex bg-red-200">
                <h4 className="font-medium text-black">
                  Receipt Meal of&nbsp;
                  <span className="font-bold text-orange-600">{item.strMeal}</span>
                </h4>
              </div>
              <div class="grid grid-cols-3 gap-4 grid-flow-row ">
                <div class="p-5 bg-white row-start-1 row-end-4 rounded-xl bg-red-200 mb-3">
                  <div class="group ">
                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 md:grid-cols-2">
                      <img src={item.strMealThumb} style={{ minHeight: "550px" }} alt="" class="h-full w-full object-cover object-center group-hover:opacity-75"></img>
                    </div>
                    <p class="mt-4 text-center text-lg font-medium text-gray-900">{item.strMeal}</p>
                    <p className="mt-4 font-normal text-blue-600">#{item.strArea}</p>
                    <p className="font-normal text-red-600">#{item.strCategory}</p>
                    <p className=" font-normal text-green-600">#{item.strTags}</p>
                  </div>
                </div>
                <div class="p-5 text-center bg-white col-start-2 col-end-4 rounded-lg">
                  {/* {item.strYoutube} */}
                  {item.strYoutube && (
                    <iframe
                      width="100%"
                      height={300}
                      src={`https://www.youtube.com/embed/${item.strYoutube.split("=")[1]}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
                <div class="p-5 bg-white rounded-lg">
                  <h3 className=" text-center font-bold font-xl">Ingredients List</h3>
                  {/* {item.strIngredient1} */}
                  <div className="bg-red-200 px-3">
                    <ul class="list-disc">
                      {/* {listIngredientsAndMeasure.map((item) => ( */}
                      <li>{item.strIngredient1}</li>
                      {/* ))} */}
                    </ul>
                  </div>
                </div>
                <div class="p-5 bg-white rounded-lg">
                  <h3 className="font-bold font-xl text-center ">Instructions List</h3>
                  {/* {item.strMeasure1} */}
                  <div className="bg-red-200 px-3">
                    <ol class="list-decimal">
                      {/* <li>{item.strMeasure1}</li> */}
                      <li>{item.strMeasure1}</li>
                    </ol>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default Meal;
