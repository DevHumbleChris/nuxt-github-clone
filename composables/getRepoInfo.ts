export const getRepoInfo = async (repoInfo: string) => {
  console.log(repoInfo)
  const config = useRuntimeConfig();
  const { data, error } = await useMyFetch(`/repos/${repoInfo}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${config.public.NUXT_GITHUB_AUTH_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
  });
  console.log(data?.value)
  return {
    data: data?.value,
    error: error?.value
  }
};
