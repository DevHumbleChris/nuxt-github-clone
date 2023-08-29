
export const getUsername = async () => {
  const { image } = user();
  const config = useRuntimeConfig();
  const firstSplit = image?.split("/u");
  const secondSplit = firstSplit[firstSplit?.length - 1].split("?");
  const secSplit = secondSplit[0].split("/");
  const userId = secSplit[secSplit.length - 1];

  const { data, error } = await useMyFetch(`user/${userId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${config.public.NUXT_GITHUB_AUTH_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  const username: string = data?.value?.login

  return {
    username,
    error: error?.value
  }
};
