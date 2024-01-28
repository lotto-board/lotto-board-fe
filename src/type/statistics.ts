export interface LotteryNumberStatistics {
  first_segment: number | null;
  second_segment: number | null;
  third_segment: number | null;
  fourth_segment: number | null;
  final_segment: number | null;
}

export interface LotteryWinningPrize {
  draw_number: number | null;
  first_prize_amount: number | null;
}
