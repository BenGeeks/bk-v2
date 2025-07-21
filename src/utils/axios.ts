import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface ApiRequestPayload<TData = unknown> {
   method: AxiosRequestConfig['method'];
   url: string;
   data?: TData;
   token?: string;
}

const apiRequest = async <TResponse = unknown>({
   method,
   url,
   data,
   token,
}: ApiRequestPayload): Promise<TResponse> => {
   const config: AxiosRequestConfig = {
      method,
      url: `/api/${url}`,
      headers: {
         'Content-Type': 'application/json',
         ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      data,
   };

   try {
      const response: AxiosResponse<TResponse> = await Axios(config);
      return response.data;
   } catch (error) {
      return Promise.reject(error);
   }
};

export default apiRequest;
