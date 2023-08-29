import { UseFetchOptions } from "nuxt/app";
import { KeysOf } from "nuxt/dist/app/composables/asyncData";

export const useMyFetch = (request: any, opts: UseFetchOptions<any, any, KeysOf<any>, null, any, "get"> | undefined) => {
  const config = useRuntimeConfig();

  return useFetch(request, { baseURL: config.public.baseURL as string, ...opts });
};
