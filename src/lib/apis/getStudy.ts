import { Study } from "@/types";
import { API_URL } from "@/constants";

interface GetStudyProps {
  studyId: number;
}

export default async function getStudy({
  studyId,
}: GetStudyProps): Promise<Study> {
  try {
    const response = await fetch(`${API_URL}/study/${studyId}/`);
    const study: Study = await response.json();
    return study;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
