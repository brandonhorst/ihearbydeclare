export type Declaration = {
  title: string;
  message: string;
  createDate: Date;
  publicationDate: Date;
};

export type ViewDeclaration = {
  isPublished: false;
  title: string;
  createDate: Date;
  publicationDate: Date;
} | {
  isPublished: true;
  title: string;
  message: string;
  createDate: Date;
  publicationDate: Date;
};
