async function myData() {
  try {
    // const res = undefined.find();

    const customError = new Error("Create custom error");
    throw customError;

  } catch (error) {
    errorHandler(error);
  }
}
myData();


function errorHandler(error) {
  const { name, massage, stack } = error;

  console.log(
    "🚀 ~ file: errorHandling.js:15 ~ errorHandler ~ massage:", massage
  );
  console.log("🚀 ~ file: errorHandling.js:15 ~ errorHandler ~ name:", name);
}
