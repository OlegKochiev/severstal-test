const makeRequest = async (url: string, method: string) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        Accept: 'application/json',
      },
    });
    if (response.ok) return true;
    throw Error(response.statusText);
  } catch (error) {
    console.log(error);
  }
};

export default makeRequest;
