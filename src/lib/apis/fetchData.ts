type Cache =
  | { cache: "no-store" }
  | { cache: "no-cache" }
  | { cache: "force-cache" }
  | { next: { revalidate: number } };

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
