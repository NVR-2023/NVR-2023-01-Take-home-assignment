import { PriceType } from "../../../backend/src/types/data-types";

const getDateSpan = (chartData: PriceType[]): string => {
  if (!chartData || chartData.length === 0) {
    return "";
  }

  const sortedData = chartData.sort((firstEntry: PriceType, secondEntry: PriceType) => {
    const firstEntryDate = new Date(firstEntry.date);
    const secondEntryDate = new Date(secondEntry.date);
    return firstEntryDate.getTime() - secondEntryDate.getTime();
  });

  const firstDate = new Date(sortedData[0].date);
  const lastDate = new Date(sortedData[sortedData.length - 1].date);

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };

  const firstDateFormatted = firstDate.toLocaleString("en-US", options);
  const lastDateFormatted = lastDate.toLocaleString("en-US", options);

  return `${firstDateFormatted} to ${lastDateFormatted}`;
};

export default getDateSpan;
