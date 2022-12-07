import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
const useMessageCalls = () => {
  const message1 = "messageprogramming";
  const message2 = "messagePrgramming2";
  const dispatch = useDispatch();
  //!------------- GET CALLS ----------------
  const getMessageData = async (url) => {
    try {
      const { data } = await axios.get(`stock/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getFirms = () => getStockData("firms");
  const getSales = () => getStockData("sales");

  //!-------------  POST CALLS ----------------
  const postMessageData = async (info, url) => {
    try {
      await axiosWithToken.post(`message/${url}/`, info);

      getStockData(url);
    } catch (error) {
      console.log(error);
    }
  };

  const postMessage1 = (info) => postMessageData(info, "messageprogramming");
  const postMessage2 = (info) => postMessageData(info, "messagePrgramming2");
  return {
    postMessage1,
    postMessage2,
  };
};

export default useMessageCalls;
