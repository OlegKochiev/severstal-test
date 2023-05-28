export const makeRequest = async (url: string, method: string) => {
  try {
    const params = {
      method,
      headers: {
        Accept: 'application/json',
      },
    };
    const response = await fetch(url, params);
    if (response.ok) return true;
    throw new Error(response.statusText);
  } catch (error) {
    console.log(error);
  }
};
