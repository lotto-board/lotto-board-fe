import type { TLineChartData } from '@/type/charts';
import type { LotteryNumberStatistics, LotteryWinningPrize } from '@/type/statistics';

export const createNumberStatPieChartData = (data: LotteryNumberStatistics): TLineChartData => {
  return {
    labels: ['1번-9번', '10번-19번', '20번-29번', '30번-39번', '40번-49번'],
    datasets: [
      {
        label: '숫자별 통계',
        backgroundColor: ['#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff'],
        data: [
          data.first_segment,
          data.second_segment,
          data.third_segment,
          data.fourth_segment,
          data.final_segment
        ]
      }
    ]
  };
};

export const createRecentPrizeLineChartData = (data: LotteryWinningPrize[]): TLineChartData => {
  return {
    labels: data.map(prize => `${prize.draw_number}회`),
    datasets: [
      {
        label: '상금 (단위: ₩)',
        backgroundColor: 'primary',
        data: data.map(prize => prize.first_prize_amount),
      }
    ]
  };
};

export const createBonusStatDonutChartData = (data: LotteryNumberStatistics): TLineChartData => {
  return {
    labels: ['1번-9번', '10번-19번', '20번-29번', '30번-39번', '40번-49번'],
    datasets: [
      {
        label: '보너스숫자 통계',
        backgroundColor: ['#96ceb4', '#ffeead', '#ff6f69', '#ffcc5c', '#88d8b0'],
        data: [
          data.first_segment,
          data.second_segment,
          data.third_segment,
          data.fourth_segment,
          data.final_segment
        ]
      }
    ]
  }
};
