export const HOST =
  process.env.NODE_ENV === "development"
    ? process.env.HOST_LOCAL_URL
    : process.env.HOST_SERVER_URL;
