import glob from "fast-glob";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

const extensions = ["md", "mdx"];

export async function listPages(
  basePath: string,
  withContent?: false
): Promise<{ path: string }[]>;
export async function listPages(
  basePath: string,
  withContent: true
): Promise<({ path: string } & matter.GrayMatterFile<string>)[]>;

export async function listPages(basePath: string, withContent?: boolean) {
  const paths = (
    await glob(`./**/*.(${extensions.join("|")})`, {
      dot: true,
      cwd: basePath,
      onlyFiles: true,
    })
  )
    .map((f) => f.replace(/\.\w+$/, "").replace(/\/index$/, ""))
    .filter((p) => p != "index")
    .map((p) => ({ path: p }));

  if (withContent)
    paths.forEach((entry) => {
      Object.assign(entry, matter.read(path.join(basePath, entry.path)));
    });

  return paths;
}

export function findPage(basePath: string, path: string): Promise<string> {
  return Promise.any(
    ["", "/index"].flatMap((suffix) =>
      extensions.map(
        (e) =>
          new Promise<string>((resolve, reject) => {
            const p = `${basePath}/${path}${suffix}.${e}`;
            fs.stat(p)
              .then((s) => {
                s.isFile() ? resolve(p) : reject();
              })
              .catch(reject);
          })
      )
    )
  );
}
