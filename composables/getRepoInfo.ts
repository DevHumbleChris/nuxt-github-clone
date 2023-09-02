interface RepoInfo {
  username: string | undefined;
  repo: string | undefined;
}

export const getRepoInfo = ({ username, repo }: RepoInfo) => {
  const config = useRuntimeConfig();
  const { data, error } = useAsyncData("events", async () => {
    const { data, error } = await useMyFetch(
      `/repos/${username}/${repo}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${config.public.NUXT_GITHUB_AUTH_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    return {
      data: data?.value,
      error: error?.value,
    };
  });
  return {
    data,
    error,
  };
};
