export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Goods,
}

export class TopPageModel {
  firstCategory: TopLevelCategory;
  secondCategory: string;
  title: string;
  category: string;
  hh?: {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalavry: number;
  };
  pros: {
    title: string;
    description: string;
    s;
  }[];
  seoText: string;
  tagsTitle?: string;
  tags: string[];
}
