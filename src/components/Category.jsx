import React, { useState } from 'react'
import CategoryModel from './CategoryModel'

const Category = () => {

    const [openCategoryModel,setOpenCategoryModel]=useState(false)

 

  return (
    <section>
        <div>
            <div className='flex items-center justify-between border shadow-md px-3 py-2'>
            <p>Category</p>
            <button onClick={()=>setOpenCategoryModel(true)}>Add Category</button>
            </div>
        </div>

        {
            openCategoryModel && (
                <CategoryModel
                close={()=>setOpenCategoryModel(false)}
                />

            )
        }
    </section>
  )
}

export default Category