import React from 'react';

import { toast } from 'react-toastify';


const Cart = ({carts,setCarts}) => {    
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

    const removeItem = () => {
        setCarts([]);
        toast.success('remove all succesfully!')
    };

    const handleDelete = (item) => {
        const filterdArray = carts.filter(c => c.id !==item.id)
        setCarts(filterdArray);
        toast.success('Item Removed from Cart');

    }


    return (
        <div className='p-10 max-w-7xl mx-auto'>
            <h1 className='text-2xl font-bold'> Your Carts :</h1>

            {
                carts.length === 0? <p className='text-center text-2xl mt-3 font-bold'>Your Cart Is Empty </p> :
                <>
                <div className='space-y-5 mt-5'>
                {
                    carts.map(item => <div className='flex items-center justify-between border rounded-lg p-3 bg-zinc-200' key={item.id}>
                         <div className='flex items-center gap-2'>
                            
                             <div>
                                <img className='h-20 w-20 object-contain' src={item.image} alt="" />
                            </div>
                            <div>
                                <h2 className='text-xl font-bold'>{item.title}</h2>
                                <p>{item.description}</p>
                            </div> 
                             </div>\
                             <div className='flex gap-3 items-center'>
                                 <div>
                                <h2 className='text-xl font-bold'> ${item.price}/month</h2>
                                
                            </div>
                            <div className='btn btn-error rounded-full'>
                                <button onClick={() => handleDelete(item)}><i className="fa-regular fa-trash-can"></i></button>
                            </div>
                             </div>

                            
                         
                    </div>)
                }

                </div>
                <div className='flex justify-between bg-black text-white p-5 rounded-lg mt-5 text-3xl font-bold'>
                    <div>
                        total
                    </div>
                    <div>
                        ${totalPrice}/month
                    </div>

                   
                </div>

                 <button onClick={removeItem} className='btn w-full mt-5 h-15 bg-red-500 text-2xl text-white font-bold rounded-lg'>Procced to Checkout</button>

        

                
                </>
            }
            
        </div>
    );
    
        
}
export default Cart;
