export const generateConfig = () => {
  return {
    server: 'http://localhost',
    port: 8080,
    time: 20190
  };
};

export const generateAnotherConfig = () => {
  return {
    server: 'http://localhost',
    port: 8080,
    time: new Date()
  };
};
