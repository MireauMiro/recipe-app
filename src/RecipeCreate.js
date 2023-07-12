import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.



  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, cuisine, photo, ingredients, preparation } = formData;
    createRecipe({name, cuisine, photo, ingredients, preparation});
    setFormData({ ...initialFormState });
  };

  // TODO: Add the required input and textarea form elements.



  // TODO: Add the required submit and change handlers



  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  placeholder="Name:"
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
               <input
                  placeholder="Cuisine:"
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                />
              </label>              
            </td>
            <td>
              <label htmlFor="photo">
                <input
                placeholder="Photo:"
                  id="photo"
                  type="text"
                  name="photo"
                  onChange={handleChange}
                  value={formData.photo}
                />
              </label>              
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  placeholder="Ingredients:"
                  id="ingredients"
                  type="text"
                  name="ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
               />
              </label> 
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  placeholder="Preparation:"
                  id="preparation"
                  type="text"
                  name="preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                />
              </label>   
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
