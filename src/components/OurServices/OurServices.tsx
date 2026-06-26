import { FaMobileScreen } from "react-icons/fa6";
import { MdOutlineFastfood} from "react-icons/md";
import { MdFoodBank } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";

const OurServices = () => {
  return (
    <div className='container py-12 p-6 m-4'>
        {/* header section */}
        <div className="text-center p-4 m-2">
            <h1 className='text-4xl font-semibold p-2 m-2'>Our Services</h1>
        </div>
        {/* icon section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-12 p-4 m-2">
            <div className="flex justify-center items-center gap-3 p-4 m-2">
                <FaMobileScreen className="text-2xl" />
                <p className="text-2xl font-semibold p-2">
                    Online Booking
                </p>
            </div>
            <div className="flex justify-center items-center gap-3 p-4 m-2">
                <MdOutlineFastfood className="text-2xl" />
                <p className="text-2xl font-semibold p-2">
                    Fast Food Delivery
                </p>
            </div>
            <div className="flex justify-center items-center gap-3 p-4 m-2">
                <MdFoodBank className="text-2xl" />
                <p className="text-2xl font-semibold p-2">
                    Order your healthy food
                </p>
            </div>
            <div className="flex justify-center items-center gap-3 p-4 m-2">
                <CiDeliveryTruck className="text-2xl p-2"  />
                <p className="p-2">Delivery</p>
            </div>

        </div>
    </div>
  )
}

export default OurServices;