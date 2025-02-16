type Cache =
  | { cache: "no-store" | "no-cache" | "force-cache" }
  | { next: { revalidate: number } }
  | { next: { tags: string[] } };

const fetchData = async <T>(
  url: string,
  cache: Cache = { cache: "no-store" }
): Promise<T | null> => {
  try {
    const response = await fetch(url, cache);
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchData;
