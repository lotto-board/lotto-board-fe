import axios from 'axios';
import type {ShopResponse} from "@/type/shop";

export const getShop = async (page: Number = 0, size: Number = 10): Promise<Array<ShopResponse>> => {
    try {
        const res = await axios.get<Array<ShopResponse>>(`/api/shop?page=${page}&size=${size}`);
        return res.data;
    } catch (e) {
        console.error('불러오기 실패')
        throw e;
    }
};
