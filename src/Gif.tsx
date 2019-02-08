import giphy from "giphy-api";
import React from "react";
import { unstable_createResource } from "react-cache";

const API = unstable_createResource<string, { data: { image_url: string } }>(
  tag => giphy().random(tag)
);

export default function Gif({ tag }: { tag: string }) {
  const image = API.read(tag);
  console.log(image);
  return <img src={image.data.image_url} />;
}
