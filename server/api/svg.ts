import { getQuery } from 'h3';
import satori from 'satori';
import { html } from "satori-html";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  let {
    text='hello, world',
    color='black',
    bg='transparent',
    width='600',
    height='400',
  } = query;
  width = typeof width === 'string' ? parseInt(width) : typeof width === 'number' ? width : 600;
  height = typeof height === 'string' ? parseInt(height) : typeof height === 'number' ? height : 400;

  // Sourced from gist of Google Font TTFs: https://gist.github.com/dotJoel/7326331
  const robotoTtfUrl = 'http://themes.googleusercontent.com/static/fonts/roboto/v9/zN7GBFwfMP4uA6AR0HCoLQ.ttf';
  const robotoData = await $fetch<ArrayBuffer>(robotoTtfUrl, { responseType: "arrayBuffer"});
  const markup = html`<div style="width: 100%; height: 100%; color: ${color}; background: ${bg};">${text}</div>`;

  // See https://github.com/vercel/satori#documentation
  const svg = await satori(markup, {
    width,
    height,
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