import type { IdeaDraft } from "@/types/idea";

type IdeaFormProps = {
  onAdd: (idea: IdeaDraft) => void;
};

export function IdeaForm({ onAdd }: IdeaFormProps) {
  void onAdd;
  return null;
}
