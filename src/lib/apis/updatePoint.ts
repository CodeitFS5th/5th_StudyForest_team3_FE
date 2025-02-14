import { Study } from "@/types";
import { API_URL } from "@/constants";

interface UpdatePointProps {
  studyId: number;
  point: number;
}

export default async function updatePoint({
  studyId,
  point,
}: UpdatePointProps): Promise<Study> {
  try {
    const response = await fetch(`${API_URL}/study/${studyId}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ point }),
    });
    const newStudy: Study = await response.json();
    return newStudy;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
