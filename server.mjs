import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, relative } from "node:path";
import { fileURLToPath } from "node:url";

const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "0.0.0.0";
const root = fileURLToPath(new URL("./dist", import.meta.url));
const indexFile = join(root, "index.html");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".webp": "image/webp",
};

const safeJoin = (pathname) => {
  const decodedPath = decodeURIComponent(pathname);
  const normalizedPath = normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(root, normalizedPath);

  return relative(root, filePath).startsWith("..") ? null : filePath;
};

const sendFile = async (response, filePath) => {
  const fileStats = await stat(filePath);

  if (!fileStats.isFile()) {
    return false;
  }

  const extension = extname(filePath);
  response.writeHead(200, {
    "Content-Length": fileStats.size,
    "Content-Type": contentTypes[extension] || "application/octet-stream",
  });
  createReadStream(filePath).pipe(response);
  return true;
};

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host}`);
    const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
    const filePath = safeJoin(pathname);

    if (filePath && (await sendFile(response, filePath))) {
      return;
    }

    await sendFile(response, indexFile);
  } catch {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Internal Server Error");
  }
});

server.listen(port, host, () => {
  console.log(`Portfolio server running on http://${host}:${port}`);
});
