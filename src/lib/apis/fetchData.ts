type Cache =
  | { cache: "no-store" } // 캐시 저장 않고 서버에서 불러옴
  | { cache: "no-cache" } // 최신 캐시를 사용, 서버에 변경되면 변경된 것으로 업데이트
  | { cache: "force-cache" } // 최신 캐시만 사용하고, 업데이트 안함
  | { next: { revalidate: number } }; // 최신 캐시를 사용, 서버에 변경되면 변경된 것으로 업데이트, 근데 시간차를 둠

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
