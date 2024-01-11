import { format, differenceInDays } from 'date-fns';

export const todayData = () => {
  const todayDate = new Date();
  const todayFormattedDate = format(todayDate, 'dd/MM/yyyy')

  const testDate = new Date(2024, 1, 25);
  const testDateFormatted = format(testDate, 'dd/MM/yyyy');

  const missingDays = differenceInDays(testDate, todayDate)

  return {
    todayDate,
    todayFormattedDate,
    missingDays,
  }
}