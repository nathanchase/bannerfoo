import { getQuery } from 'h3';
import satori from 'satori';
import { html } from "satori-html";

export default defineEventHandler(async (event) => {
  // Sourced from gist of Google Font TTFs: https://gist.github.com/dotJoel/7326331
  const query = getQuery(event);
  let { text='hello, world', color='black' } = query;
  const robotoTtfUrl = 'http://themes.googleusercontent.com/static/fonts/roboto/v9/zN7GBFwfMP4uA6AR0HCoLQ.ttf';
  const robotoData = await $fetch<ArrayBuffer>(robotoTtfUrl, { responseType: "arrayBuffer"});
  const markup = html`<div style="color: ${color};">${text}</div>`;

  // See https://github.com/vercel/satori#documentation
  const svg = await satori(markup, {
    width: 600,
    height: 400,
    fonts: [
      {
        name: 'Roboto',
        data: robotoData,
        weight: 400,
        style: 'normal',
      }
    ],
  });
  return svg;
});