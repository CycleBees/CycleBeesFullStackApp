// API Configuration for Mobile App
export const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/api';

export const API_ENDPOINTS = {
  // Authentication
  SEND_OTP: '/auth/send-otp',
  VERIFY_OTP: '/auth/verify-otp',
  REGISTER: '/auth/register',
  PROFILE: '/auth/profile',
  
  // Repair
  REPAIR_SERVICES: '/repair/services',
  REPAIR_TIME_SLOTS: '/repair/time-slots',
  REPAIR_MECHANIC_CHARGE: '/repair/mechanic-charge',
  REPAIR_REQUESTS: '/repair/requests',
  
  // Rental
  RENTAL_BICYCLES: '/rental/bicycles',
  RENTAL_REQUESTS: '/rental/requests',
  
  // Coupons
  COUPON_APPLY: '/coupon/apply',
  COUPON_AVAILABLE: '/coupon/available',
  
  // Promotional Cards
  PROMOTIONAL_CARDS: '/promotional/cards',
};

export const API_CONFIG = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
}; 