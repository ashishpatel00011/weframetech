import Image from 'next/image';
import seller from './seller.png';
const SignUpBanner = () => {

    return (
        <div className="flex md:items-center md:justify-between md:p-8 bg-white md:space-x-3 lg:flex-row flex-col">
            {/* Left Side: Image */}
            <div className="w-full lg:w-1/2">
                <Image
                    src={seller}
                    alt="Room Image"
                    layout="responsive"
                    width={500}
                    height={300}
                    className="rounded-xl object-cover"
                />
            </div>


            {/* Right Side: Form */}
            <div className="w-full lg:w-1/2 bg-pink-100 p-8 rounded-xl md:m-2 mt-3">
                <h2 className="text-2xl font-semibold text-gray-700">S'inscrire & économiser <span className='text-cyan-500'>10%</span> </h2>
                <p className="mt-2 text-gray-500 text-sm">
                    Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most
                    opportunity didn't. Yet busy any meeting shark light marginalized 4-blocker message. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minus in accusamus at alias consequatur iure illum obcaecati aperiam perspiciatis. Obcaecati possimus aperiam ea atque adipisci consequatur explicabo ullam, quisquam non iure nisi esse fugit suscipit praesentium molestias?
                </p>
                <form className="md:mx-2 my-5 flex md:flex-row flex-col md:space-x-3 ">
                    <input
                        type="email"
                        placeholder="john@doe.com"
                        className="w-full p-3 border-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <button
                        type="submit"
                        className=" bg-teal-500 text-white p-3 rounded-md hover:bg-teal-600 focus:outline-none md:mt-0 mt-3"
                    >
                        S'INSCRIRE
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpBanner;
