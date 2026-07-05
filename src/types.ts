export interface CogAuthor {
  name: string;
  email?: string;
}

export type CogStatus = 'approved' | 'unapproved';

export interface Cog {
  id: string;
  status: CogStatus;
  repo: string;
  branch: string;
  subdirectory?: string;
  install_url?: string;
  name?: string;
  version?: string;
  stars?: number;
  description?: string;
  license?: string | { text: string };
  authors?: (string | CogAuthor)[];
  dependencies?: string[];
  urls?: Record<string, string>;
}
