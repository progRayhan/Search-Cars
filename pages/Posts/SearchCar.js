import { useState } from 'react';
import { useForm } from 'react-hook-form';


const Cars = () => {
      const { register, handleSubmit } = useForm();
      const [ allcars, setAllcars ] = useState();
      const [ isData, setIsData ] = useState(false);

      let carMaker = '';

      const handleInfo = (data) => {
            // carMaker = data.carmakername;
            fetch(`https://backend.bhalogari.com/api/cars/choose-by-maker/?maker_name=${carMaker}`)
            .then(res => res.json())
            .then(data => {
                  console.log(data);
                  setAllcars(data);
                  setIsData(true);
            });
      }

      console.log(allcars);
      return (
            <div>
                  <h1 className='flex justify-center mt-5 text-2xl'>Select a Car Brand</h1>
                  <div>
                        <form className='flex justify-center mt-5' onChange={handleSubmit(handleInfo)}>
                              <select placeholder="Car Maker Name"  {...register("carmakername")}>
                                    <option value="toyota">Toyota</option>
                                    <option value="nissan">Nissan</option>
                                    <option value="honda">Honda</option>
                                    <option value="hyundai">Hyundai</option>
                              </select>
                        </form>
                  </div>
                  <br />
                  <div className="flex justify-center justify-evenly flex-wrap">
                        {isData? allcars.results.map( car => (
                              <div key={car.car_id} className='shadow-2xl p-6 h-100'>
                                    <img src={car.images.image_url} width="300px" height="200px" />
                                    <h2>{car.car_manufacturer.maker_name}</h2>
                                    <h3>Car Model: {car.model_name.model_name}</h3>
                                    <h6>Price: {car.affiliated_price}</h6>
                                    <h6>Car Year: {car.car_year}</h6>
                                    <h6>Company Name: {car.author}</h6>
                                    {/* <button
                                          type="button"
                                          onClick={() => {
                                          router.push({
                                          pathname: '/cars/[id]',
                                          query: { id: car.car_id },
                                          })
                                          }}
                                    >More Details
                                    </button> */}
                              </div>
                        )) : "No Car Selected"}
                  </div>
                  <br/>
                  <br/>
            </div>
      );
};


export default Cars;