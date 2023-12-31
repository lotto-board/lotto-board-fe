
export interface ShopResponse {
    count_shop_first: number | null;
    count_shop_second: number | null;
    shop_info: ShopInfoResponse;
}

export interface ShopInfoResponse {
    retailerId: number;
    address: string;
    name: string;
    phone_number: string;
    latitude: string;
    longitude: string;
}
