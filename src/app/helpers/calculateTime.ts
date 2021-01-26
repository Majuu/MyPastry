import { differenceInMinutes } from 'date-fns';

const convertToTwoDigits = (digit: number) => {
  return `0${digit}`;
};

export const calculateTime = (initialTime: Date, pickedTime: Date): string => {
  pickedTime.setSeconds(0);
  const calculatedMinutes: number = differenceInMinutes(pickedTime, initialTime);
  if (calculatedMinutes > 0 && calculatedMinutes < 60) {
    return `00:${calculatedMinutes}:00`;
  } else if (calculatedMinutes >= 60) {
    const hours: number = Math.floor(calculatedMinutes / 60);
    const minutes: number = calculatedMinutes % 60;
    const returnHours: string = hours > 10 ? hours.toString() : convertToTwoDigits(hours);
    const returnMinutes: string = minutes > 10 ? minutes.toString() : convertToTwoDigits(minutes);

    return `${returnHours}:${returnMinutes}:00`;
  } else {
    return '00:00:00';
  }
};
