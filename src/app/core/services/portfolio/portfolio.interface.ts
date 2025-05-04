export interface PortfolioFile {
  name: string;
  type: 'html' | 'markdown' | 'typescript' | 'json'; // add other types if needed
  route: string;
}
