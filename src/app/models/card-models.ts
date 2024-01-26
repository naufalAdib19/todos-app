export interface CardActions {
  onUpdateClick: () => void;
  onDeleteClick: () => void;
  onDetailClidk: () => void;
}

export interface CardModels {
  title: String;
  content: String;
  type: String;
  dateCreated: Date;
  dateFinished: Date;
  id: String;
}
