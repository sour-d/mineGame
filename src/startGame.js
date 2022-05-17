const { initateMove, writeData, readData } = require('./library.js');

const main = function (destination) {
  const dataFilePath = './data.json';
  const data = readData(dataFilePath);

  const updatedData = initateMove(data, destination);
  writeData(dataFilePath, JSON.stringify(updatedData));
};

main(+process.argv[2]);