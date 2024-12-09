import { FaShippingFast, FaBroom, FaShoppingCart, FaTruck } from 'react-icons/fa';

const ServiceBanner = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-pink-100 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">
          On s'occupe de <span className="text-teal-500">tout</span>
        </h2>
        <p className="text-gray-500 mb-12">
          Office ipsum you must be muted. It meeting commitment busy pain.
        </p>

        {/* Add grid for responsive layout */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Livraison & Reprise */}
          <div className="flex flex-col items-center text-gray-700">
            <FaShippingFast className="text-4xl text-teal-500 mb-2" />
            <p className="text-sm font-medium">Livraison & Reprise</p>
            <p className="text-xs text-gray-500">Selon vos besoins</p>
          </div>

          {/* Nettoyage */}
          <div className="flex flex-col items-center text-gray-700">
            <FaBroom className="text-4xl text-teal-500 mb-2" />
            <p className="text-sm font-medium">Nettoyage</p>
            <p className="text-xs text-gray-500">Selon vos besoins</p>
          </div>

          {/* Commande Illimitée */}
          <div className="flex flex-col items-center text-gray-700">
            <FaShoppingCart className="text-4xl text-teal-500 mb-2" />
            <p className="text-sm font-medium">Commande Illimitée</p>
            <p className="text-xs text-gray-500">Tout est possible</p>
          </div>

          {/* Transport & Enlèvement */}
          <div className="flex flex-col items-center text-gray-700">
            <FaTruck className="text-4xl text-teal-500 mb-2" />
            <p className="text-sm font-medium">Transport & Enlèvement</p>
            <p className="text-xs text-gray-500">On s'occupe de tout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
