import React from 'react'

const ShopBanner = () => {
    return (
        <div>
            <div className='flex justify-between'>
                {/* img  */}
                <div>
                    <img className='w-100' src="https://images.pexels.com/photos/2309235/pexels-photo-2309235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                {/* content  */}
                <div>
                    <h2> Elevate Your Shopping Experience</h2>
                    <p>Browse through our handpicked collection of fashion, accessories, and lifestyle essentials. Find everything you love, all in one store.</p>
                </div>
            </div>
        </div>
    )
}

export default ShopBanner