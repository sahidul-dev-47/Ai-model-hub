import React from 'react';

const Cart = ({carts}) => {
    return (
        <div className='p-10'>
            <h1 className='text-2xl font-bold'> Your Carts :</h1>
            <div className='space-y-5 mt-5'>
                {
                    carts.map(item => <div className='flex items-center justify-between border rounded-lg p-3' key={item.id}>
                         <div className='flex items-center gap-2'>
                            
                             <div>
                                <img className='h-20 w-20 object-contain' src={item.image} alt="" />
                            </div>
                            <div>
                                <h2 className='text-xl font-bold'>{item.title}</h2>
                                <p>{item.description}</p>
                            </div> 
                             </div>\
                              <div>
                                <h2 className='text-xl font-bold'> ${item.price}/month</h2>
                            </div>

                            
                         
                    </div>)
                }

                </div>
                <div className='flex justify-between bg-black text-white p-5 rounded-lg mt-5 text-2xl font-bold'>
                    <div>
                        total
                    </div>
                    <div>
                        0
                    </div>

                </div>
        

        </div>
    );
    
        
}
export default Cart;
