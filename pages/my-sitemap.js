import { NextApiRequest, NextApiResponse } from "next";

const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  // An array with your links
  const links = [
    { url: "/", changefreq: "daily", priority: 0.3 },
    { url: "/#about", changefreq: "daily", priority: 0.3 },
    { url: "/#skills", changefreq: "daily", priority: 0.3 },
    { url: "/#projects", changefreq: "daily", priority: 0.3 },
    { url: "/#contact", changefreq: "daily", priority: 0.3 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({
    hostname: `https://${req.headers.host}`,
    cacheTime: 600000,
  });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
