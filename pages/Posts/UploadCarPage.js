import React from 'react'


function UploadCarPage() {
  return (
    <div className='mt-10'>
    <div className="px-12 pb-10">
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="Car Name"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center" />
            </div>
         </div>
         <div className="w-full mb-2">
            <div className="flex justify-center">   
               <input type='text' placeholder="Car Model"
                  className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none" />
            </div>
         </div>
         <div className="w-full mb-2 justify-center">
            <div className="flex items-center">   
               <input type='text' placeholder="Car Year"
                  className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none" />
            </div>
         </div>
         <div className="w-full mb-2 justify-center">
            <div className="flex items-center">   
               <input type='text' placeholder="Car Features"
                  className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none" />
            </div>
         </div>
         <div className="w-full mb-2 justify-center">
            <div className="flex items-center">   
               <input type='text' placeholder="Fuel Type"
                  className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none" />
            </div>
         </div>
         <button type="submit"
            className="w-full mt-6 py-2 rounded bg-blue-500 text-gray-100 focus:outline-none">Log In</button>
      </div>
      </div>
  )
}

export default UploadCarPage