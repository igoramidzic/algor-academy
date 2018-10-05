export interface Problem {
  _id: String;
  title: String;
  description: String;
  long_description: String;
  date_published: Date;
  word_solution: String;
  pseudo_code_solution: String;
  code_solution: String;
  difficulty: Number;
  link: String;
}
