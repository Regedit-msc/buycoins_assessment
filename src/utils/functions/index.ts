export const openModal = (modalPath: string) => {
  window.location.hash = modalPath;
  window.location.reload();
};

export const removeHash = () => {
  window.history.pushState(
    '',
    document.title,
    window.location.pathname + window.location.search,
  );
  window.dispatchEvent(new Event('hashchange'));
};

export const requestHelper = async (
  url: string,
  args: Record<string, unknown>,
): Promise<{ success: boolean; data: unknown }> => {
  try {
    const response = await window.fetch(url, args);
    const data = await response.json();
    return { success: true, data };
  } catch (err) {
    let error;
    if (err && err instanceof Response) {
      error = await err.json();
    }
    return { success: false, data: error };
  }
};


export function capitalizeFirstLetter(str: string) {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized;
}

export const objectKeys = <Obj>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj) as (keyof Obj)[];
}

export async function fetchMockItems<T>(value: T, delay: number = 5000): Promise<T> {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(value);
      }, delay);
  })
}