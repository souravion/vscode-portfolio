export interface GitHubProfile {
  username: string;
  repositories: number;
  totalStars: number;
}

export interface Repository {
  name: string;
  isPrivate: boolean;
  description: string;
  language: string;
  stars: number;
  url: string;
}
