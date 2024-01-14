import axios from 'axios';
import type { ShopInfoResponse, ShopResponse } from "@/type/shop";
import { toast } from "vue3-toastify";

export const getShop = async (page: Number = 0, size: Number = 10): Promise<Array<ShopResponse>> => {
    try {
        const res = await axios.get<Array<ShopResponse>>(`/api/shop/ranking?page=${page}&size=${size}`);
        return res.data;
    } catch (e) {
        toast.error('로또 당첨점 정보 불러오기 실패!');
        throw e;
    }
};

export const getTop100ShopInfo = async (): Promise<Array<ShopInfoResponse>> => {
    try {
        const res = await axios.get<Array<ShopInfoResponse>>(`/api/shop/ranking/top/100`);
        return res.data;
    } catch (e) {
        toast.error('마커 정보 불러오기 실패!');
        throw e;
    }
}
