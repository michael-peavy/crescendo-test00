import React from 'react';

export default function Recipes({
  title,
  description,
  ingredients,
  image,
  servings,
  prepTime,
  cookTime,
}) {
  return (
    <>
      <div className='card mt-5'>
        <img className='card-img-top' src={image} alt='Card image top' />
        <div className='card-title mt-3 text-center'>
          <h2>{title}</h2>
        </div>
        <div className='card-body '>
        <div className='text-center'>
          <p className='border-bottom pb-2'> {description}</p>
          <p className='border-bottom pb-2'>Prep time: {prepTime}</p>

          <p className='border-bottom pb-2'>Cook time: {cookTime}</p>

          <p className='border-bottom pb-2'>servings: {servings}</p>
           <h3 className='mb-4'><u>Ingredients</u></h3>
           </div>
          <ol className=''>
            {ingredients.map((ingredient) => (
              <>
                <li>{ingredient.name}
                <br></br>
                Amount: {ingredient.amount}
                <br></br>
                measurement: {ingredient.measurement}
                <br></br>
                <br></br>


                </li>
              </>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
