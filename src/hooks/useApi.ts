import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { api } from '../config/axios';
import { AxiosError } from 'axios';

export const useApi = {
  get: <TData = unknown, TError = AxiosError>(
    url: string,
    options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>
  ) => {
    return useQuery<TData, TError>({
      queryKey: [url],
      queryFn: async () => {
        const { data } = await api.get(url);
        return data;
      },
      ...options,
    });
  },

  post: <TData = unknown, TVariables = unknown, TError = AxiosError>(
    url: string,
    options?: Omit<UseMutationOptions<TData, TError, TVariables>, 'mutationFn'>
  ) => {
    return useMutation<TData, TError, TVariables>({
      mutationFn: async (variables) => {
        const { data } = await api.post(url, variables);
        return data;
      },
      ...options,
    });
  },

  put: <TData = unknown, TVariables = unknown, TError = AxiosError>(
    url: string,
    options?: Omit<UseMutationOptions<TData, TError, TVariables>, 'mutationFn'>
  ) => {
    return useMutation<TData, TError, TVariables>({
      mutationFn: async (variables) => {
        const { data } = await api.put(url, variables);
        return data;
      },
      ...options,
    });
  },

  delete: <TData = unknown, TError = AxiosError>(
    url: string,
    options?: Omit<UseMutationOptions<TData, TError, void>, 'mutationFn'>
  ) => {
    return useMutation<TData, TError>({
      mutationFn: async () => {
        const { data } = await api.delete(url);
        return data;
      },
      ...options,
    });
  },
}; 