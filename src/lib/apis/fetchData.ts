const fetchData = async <T>(url: string): Promise<T | null> => {
  try {
    const data: T = await fetch(url).then((response) => response.json());
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchData;
