import request from "@/util/request";

export const getIndex = () =>
  request({
    url: "/index",
    method: "post"
  });
