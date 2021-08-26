export const API = (data: any) => {
  return new Promise((resolve, reject) => {
    if (!data) {
      reject(new Error('Provided data was incorrect!'));
    }

    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};
