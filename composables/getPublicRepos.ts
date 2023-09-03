export const getPublicRepos = async () => {
    const config = useRuntimeConfig();
    const { data, error } = await useMyFetch(`/repositories`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${config.public.NUXT_GITHUB_AUTH_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
    const slicedReposData = data?.value?.slice(0,5)
    return {
      data: slicedReposData,
      error: error?.value
    }
  };
