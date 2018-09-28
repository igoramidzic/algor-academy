export interface Problem {
  _id: {
    type: String;
  };
  title: {
    type: String;
  };
  description: {
    type: String;
  };
  date_published: {
    type: Date;
  };
  word_solution: {
    type: String;
  };
  pseudo_code_solution: {
    type: String;
  };
  code_solution: {
    type: String;
  };
  difficulty: {
    type: Number;
  };
  success_rate: {
    type: Number;
  };
}
