import React, {  useState } from 'react'
import toast from 'react-hot-toast'


const CartClone = () => {

const [cartItems,setCartItems]=useState([
    {
        id:1,
        name: "item1",
        price: 100,
        selected: true
    },
    {
        id:2,
        name: "item2",
        price: 200,
        selected: true
    },
    {
        id:3,
        name: "item3",
        price: 300,
        selected: true
    },
    {
        id:4,
        name: "item4",
        price: 400,
        selected: true
    },
])

const handeSelection=(id)=>{
    setCartItems((preveItems)=>
        preveItems.map((item)=>
            item.id===id ? 
            {...item, selected: !item.selected}: item
        )
    )
}

const placeOrder=()=>{
    const selectedItems=cartItems.filter((item)=>item.selected)
    if(selectedItems.length === 0){
        toast.error("No items Selected for order")
        return
    }
    console.log("placing order for . ",selectedItems)
    toast.success(`Order placed for ${selectedItems.map((item)=>item.name).join(", ")}`)
}

const count=cartItems.filter((item)=>item.selected).length

  return (
    <div>
        <h2 className='py-3'>Cart Clone</h2>
        <p className='border bg-blue-600'></p>
        {
            count==0 ?
            (

                <div>
                       <p className='py-2'>No items Selected</p>
                       <p className='border bg-blue-600'></p>
                 </div>   
            ):
            (
               <div>
                 <p className='py-2'>Selected Count : {count}</p>
                 <p className='border bg-blue-600'></p>
                </div>
            )
        }

        <div className='flex items-center justify-center'>
           
            
        <ul className='py-2 '>
            {
                cartItems.map((item,index)=>
                (
                    <li key={item.id+index+" cart"} className='py-2'>
                        <label className='flex gap-2'>
                            <input
                            type='checkbox'
                            className={`${item.selected===true ? 'bg-blue-700 border border-green-500':'bg-red-600'}`}
                            checked={item.selected}
                            onChange={()=>handeSelection(item.id)}
                            />
                             {item.name}-${item.price}
                           
                        </label>

                    </li>
                )
                )
            }
        </ul>



        </div>
        <p className='border bg-blue-600'></p>
        <button className='bg-green-200 px-4 py-2 my-2 border rounded-md' onClick={placeOrder}>Place Order</button>

    </div>
  )
}

export default CartClone