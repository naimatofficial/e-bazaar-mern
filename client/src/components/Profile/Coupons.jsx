import React from 'react';
import { FaFire, FaTruck, FaDollarSign } from 'react-icons/fa';
import CouponCard from './subcomponenets/CouponsCard';

const couponsData = [
  { icon: <FaFire style={{ color: 'red', fontSize: '30px'}} />, discount: '10%', on: '6valley CMS', code: 'rtzxx8n8lr', validUntil: '10 Jun, 2025', minPurchase: 100 },
  { icon: <FaTruck style={{ color: 'blue' , fontSize: '30px'}} />, discount: 'Free Delivery', on: 'Mart Morning', code: 'pcuw655ytg', validUntil: '31 Dec, 2027', minPurchase: 10 },
  { icon: <FaDollarSign style={{ color: 'green' , fontSize: '30px'}} />, discount: '$100.00', on: '6valley CMS', code: 'ogpuqyeeoe', validUntil: '06 Oct, 2028', minPurchase: 200 },
  { icon: <FaDollarSign style={{ color: 'darkgreen' , fontSize: '30px'}} />, discount: '$50.00', on: 'Mart Morning', code: '2ul59rvkw2', validUntil: '31 Dec, 2026', minPurchase: 500 },
  { icon: <FaDollarSign style={{ color: 'lightgreen' , fontSize: '30px'}} />, discount: '$10.00', on: 'All Shops', code: '856gmef66p', validUntil: '10 Jun, 2026', minPurchase: 100 },
  { icon: <FaTruck style={{ color: 'darkblue' , fontSize: '30px'}} />, discount: 'Free Delivery', on: 'Mart Morning', code: 'l2oDTjKF3z', validUntil: '31 Jan, 2029', minPurchase: 2000 },
  { icon: <FaFire style={{ color: 'orange' , fontSize: '30px'}} />, discount: '75%', on: 'Mart Morning', code: 'rFhfx7XiCm', validUntil: '31 Jan, 2029', minPurchase: 7000 },
];

const Coupons = () => {
  return (
    <div className="w-full mx-auto ">
      <h1 className="text-2xl font-bold text-center mb-6">Coupons</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {couponsData.map((coupon, index) => (
          <CouponCard
            key={index}
            icon={coupon.icon}
            discount={coupon.discount}
            on={coupon.on}
            code={coupon.code}
            validUntil={coupon.validUntil}
            minPurchase={coupon.minPurchase}
          />
        ))}
      </div>
    </div>
  );
};

export default Coupons;
