import axios from 'axios';

export const getLocationsCount = async (): Promise<Array<Object>> => {
    try {
        const res = await axios.get<Array<Object>>(`/api/first/locations/count`);
        return res.data;
    } catch (e) {
        console.error('불러오기 실패')
        throw e;
    }
};
