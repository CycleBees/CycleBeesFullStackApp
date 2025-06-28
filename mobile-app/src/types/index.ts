// TypeScript type definitions for Mobile App

export interface User {
  id: number;
  phone: string;
  full_name: string;
  email: string;
  age: number;
  pincode: string;
  address: string;
  profile_photo?: string;
  created_at: string;
  updated_at: string;
}

export interface RepairService {
  id: number;
  name: string;
  description: string;
  special_instructions?: string;
  price: number;
  created_at: string;
  updated_at: string;
}

export interface RepairRequest {
  id: number;
  user_id: number;
  contact_number: string;
  alternate_number?: string;
  email: string;
  notes?: string;
  preferred_date: string;
  time_slot_id: number;
  time_slot: TimeSlot;
  payment_method: 'online' | 'offline';
  total_amount: number;
  status: 'pending' | 'approved' | 'waiting_payment' | 'active' | 'completed' | 'expired';
  created_at: string;
  updated_at: string;
  services: RepairService[];
  files: RepairRequestFile[];
}

export interface RepairRequestFile {
  id: number;
  repair_request_id: number;
  file_path: string;
  file_type: 'image' | 'video';
  created_at: string;
}

export interface TimeSlot {
  id: number;
  start_time: string;
  end_time: string;
  created_at: string;
}

export interface Bicycle {
  id: number;
  name: string;
  model: string;
  special_instructions?: string;
  daily_rate: number;
  weekly_rate: number;
  delivery_charge: number;
  specifications: any;
  created_at: string;
  updated_at: string;
  photos: BicyclePhoto[];
}

export interface BicyclePhoto {
  id: number;
  bicycle_id: number;
  photo_path: string;
  created_at: string;
}

export interface RentalRequest {
  id: number;
  user_id: number;
  bicycle_id: number;
  bicycle: Bicycle;
  duration_type: 'daily' | 'weekly';
  duration: number;
  contact_number: string;
  alternate_number?: string;
  delivery_address: string;
  special_instructions?: string;
  payment_method: 'online' | 'offline';
  total_amount: number;
  status: 'pending' | 'approved' | 'waiting_payment' | 'arranging_delivery' | 'active_rental' | 'completed' | 'expired';
  created_at: string;
  updated_at: string;
}

export interface Coupon {
  id: number;
  code: string;
  discount_type: 'percentage' | 'fixed';
  discount_value: number;
  minimum_amount: number;
  maximum_discount?: number;
  usage_limit: number;
  used_count: number;
  applicable_items: string[];
  expiry_date: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface PromotionalCard {
  id: number;
  title: string;
  description?: string;
  image_path: string;
  external_link?: string;
  display_order: number;
  start_date: string;
  end_date: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  loading: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
} 