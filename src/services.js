// const API_URL_FOAAS = "https://foaas.com/off/Tom/Everyone";
const anotherapi = "https://cataas.com/cat?json=true/";

//ENDPOINTS
// const getUrlFoaas = `${API_URL_FOAAS}.json`;
const anotherget = `${anotherapi}`;

// REQUEST

export const getPost = async () => {
  try {
    const response = await fetch(anotherget, {
      headers: {
        "Content-Type": "application/JSON",
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

// export const getPost = async () => {
//   try {
//     const response = await fetch(anotherget, {
//       method: "GET",
//       mode: "no-cors",
//       headers: {
//         "Content-Type": "application/JSON",
//       },
//     });
//     return await response.json();
//   } catch (err) {
//     console.log(err);
//   }
// };
