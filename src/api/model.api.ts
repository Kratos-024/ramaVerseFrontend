export const sendVerse = async (
  verse: string
): Promise<{ Answer: boolean; Documents: string[] }> => {
  try {
    const response = await fetch(
      "https://ramaveresebackend4-2.onrender.com/get-verse",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ verse }),
      }
    );

    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getVerse = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000", {
      method: "GET",
    });
    const responseJson = await response.json();
    console.log(responseJson.message);
  } catch (error) {
    console.log(error);
  }
};
