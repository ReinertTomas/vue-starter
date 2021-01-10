import dayjs from "dayjs";

const useDate = () => {
  const now = () => {
    return dayjs();
  };

  const nowFormatApi = () => {
    return dayjs().format();
  };

  return {
    now,
    nowFormatApi,
  };
};

export default useDate;
