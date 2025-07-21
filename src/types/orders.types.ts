export interface Order {
   id: string;
   paymentDate?: string;
   deliveryDate: string;
   downPaymentDate?: string;
   deliveryTime?: string;
   isDownPayment?: boolean;
   downPayment?: number;
   deliveryCharge?: number;
   discount?: number;
   total: number;
   isGcash: boolean;
   forDelivery: boolean;
   isDelivered: boolean;
   isPaid: boolean;
}
