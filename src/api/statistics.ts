import axios from 'axios';
import type { LotteryNumberStatistics, LotteryWinningPrize, NumberRanking } from '@/type/statistics';
import { toast } from 'vue3-toastify';

export const getStatistics = async(): Promise<LotteryNumberStatistics> => {
    try {
      const res = await axios.get<LotteryNumberStatistics>(`/api/lotto-result/statistics`);
      return res.data;
    } catch (e) {
      toast.error('로또 정보 불러오기 실패!');
      throw e;
    }
};

export const getBonusNumberStatistics = async(): Promise<LotteryNumberStatistics> => {
  try {
    const res = await axios.get<LotteryNumberStatistics>(`/api/lotto-result/statistics/bonus`);
    return res.data;
  } catch (e) {
    toast.error('보너스번호 정보 불러오기 실패!');
    throw e;
  }
}

export const getRecentPrize = async(): Promise<Array<LotteryWinningPrize>> => {
  try {
    const res = await axios.get<Array<LotteryWinningPrize>>(`/api/lotto-result/recent-prize`);
    return res.data;
  } catch (e) {
    toast.error('로또 상금 불러오기 실패!');
    throw e;
  }
};

export const getNumberRanking = async(): Promise<Array<NumberRanking>> => {
  try {
    const res = await axios.get<Array<NumberRanking>>(`/api/lotto-result/number-rankings`);
    return res.data;
  } catch (e) {
    toast.error('로또 랭킹 불러오기 실패!');
    throw e;
  }
}

export const getBonusNumberRanking = async(): Promise<Array<NumberRanking>> => {
  try {
    const res = await axios.get<Array<NumberRanking>>(`/api/lotto-result/bonus-number`);
    return res.data;
  } catch (e) {
    toast.error('로또 보너스 번호 랭킹 불러오기 실패!');
    throw e;
  }
}
