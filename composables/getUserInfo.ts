export const getUserInfo = async (username: string) => {
    const config = useRuntimeConfig();
    const { data, error } = await useMyFetch(`/users/${username}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${config.public.NUXT_GITHUB_AUTH_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
    return {
      data: data?.value,
      error: error?.value
    }
  };
