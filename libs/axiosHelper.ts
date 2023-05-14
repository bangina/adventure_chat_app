import returnAPIResponse from "@/services/mock-api";

export const axiosGet = async (url, params?): Promise<any> => {
  const data = await new Promise((resolve) => {
    const response = returnAPIResponse(url, params);
    setTimeout(() => {
      resolve(response);
    }, 50);
  });
  return data;
};

export const axiosPost = async <T>(response: T): Promise<any> => {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, 50);
  });
  return data;
};
