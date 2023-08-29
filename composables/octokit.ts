import { Octokit } from "octokit";

export const octokit = new Octokit({
  auth: process.env.NUXT_GITHUB_AUTH_TOKEN
});
