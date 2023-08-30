// generate.ts
import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import dotenv from "dotenv";
import figmaApiExporter from "figma-api-exporter";
import svgrConfig from "../svgr.config";
import { createIndex, downloadSVGsData, toPascalCase } from "./utils";
const svgr = require("@svgr/core").default;

const ICONS_DIRECTORY_PATH = path.resolve(__dirname, "./icons/components");
const SVG_DIRECTORY_PATH = path.resolve(__dirname, "./icons/svgs");
const INDEX_DIRECTORY_PATH = path.resolve(__dirname, "./icons");

// Load environment variables
dotenv.config();

// 1. Retrieve Figma Access Token, File ID and Canvas from .env file
const FIGMA_API_TOKEN = process.env.FIGMA_API_TOKEN;
const FIGMA_FILE_ID = process.env.FIGMA_FILE_ID;
const FIGMA_CANVAS = process.env.FIGMA_CANVAS;

if (
  !FIGMA_API_TOKEN ||
  !FIGMA_FILE_ID ||
  !FIGMA_CANVAS ||
  FIGMA_API_TOKEN === "NOT SET"
) {
  console.error("Environment Variables not set.");
  process.exit(1);
}

const sizes = {
  icon: {
    Small: 16,
    Medium: 20,
    Large: 24,
  },
  thirdPartyLogo: {
    Tiny: 16,
    Small: 32,
    Medium: 48,
    Large: 64,
  },
};

// 2. Fetch icons metadata from Figma
console.log(chalk.magentaBright("-> Fetching icons metadata"));
const exporter = figmaApiExporter(FIGMA_API_TOKEN);

exporter
  .getSvgs({
    fileId: FIGMA_FILE_ID,
    canvas: FIGMA_CANVAS,
  })
  .then(async (svgsData) => {
    // 3. Download SVG files from Figma
    console.log(chalk.blueBright("-> Downloading SVG code"));
    const downloadedSVGsData = await downloadSVGsData(svgsData.svgs);

    // 4. Read manually added SVGs data
    console.log(chalk.blueBright("-> Reading manually added SVGs"));
    let manuallyAddedSvgs: { data: string; name: string }[] = [];
    const svgFiles = fs
      .readdirSync(SVG_DIRECTORY_PATH)
      // Filter out hidden files (e.g. .DS_STORE)
      .filter((item) => !/(^|\/)\.[^/.]/g.test(item));
    svgFiles.forEach((fileName) => {
      const svgData = fs.readFileSync(
        path.resolve(SVG_DIRECTORY_PATH, fileName),
        "utf-8"
      );
      manuallyAddedSvgs.push({
        data: svgData,
        name: toPascalCase(fileName.replace(/svg/i, "")),
      });
    });
    const allSVGs = [...downloadedSVGsData, ...manuallyAddedSvgs];

    // 5. Convert SVG to React Components
    console.log(chalk.cyanBright("-> Converting to React components"));
    fs.rmSync(ICONS_DIRECTORY_PATH, { recursive: true, force: true }); // remove all old icons
    allSVGs.forEach((svg) => {
      const svgCode = svg.data;

      let sizeMatch = svg.name.match(/Size=([^ ]+)/i);
      let size = sizeMatch ? sizeMatch[1] : null;
      if (!size) {
        const dimensions = svgCode.match(/<svg[^>]* width="([^"]+)"[^>]* height="([^"]+)"/i);
        if (dimensions) {
          const [_, width, height] = dimensions;
          size = `${width}x${height}`;
        }
      }

      const isThirdPartyLogo = svg.name.includes("Brand="); // if it's a third party logo, it will have a `Brand=` in the name
      const artboardName = isThirdPartyLogo
        ? svg.name.match(/Brand=([^,]+)/i)[1]
        : svg.name.match(/Type=([^,]+)/i)[1];
      const mode = svg.name.includes("Mode=")? svg.name.match(/Mode=([^ ]+)/i)[1] : null;

      const svgrConfigWithDimensions = {
        ...svgrConfig,
        svgProps: isThirdPartyLogo
          ? {
              ...svgrConfig.svgProps,
              width: sizes.thirdPartyLogo[size],
              height: sizes.thirdPartyLogo[size],
            }
          : size && size.includes("x")
          ? {
              ...svgrConfig.svgProps,
              width: size.split("x")[0],
              height: size.split("x")[1],
            }
          : {
              ...svgrConfig.svgProps,
              width: sizes.icon[size],
              height: sizes.icon[size],
            },
      };

      // rename from e.g. `Size=Small (16px), Type=Download, Mode=Light` -> `DownloadSmallLight`
      // If isThirdPartyLogo is true, the size is included.
      // If isThirdPartyLogo is false, the size is only included if it exists in sizes.icon and is not equal to the default width in svgrConfig.svgProps
      // If mode exists, it is included at the end of the component name.
      const componentName = toPascalCase(
        mode
          ? `${toPascalCase(artboardName)}${isThirdPartyLogo ? toPascalCase(size || '') : (sizes.icon[size] && sizes.icon[size] !== svgrConfig.svgProps.width) ? toPascalCase(size || '') : ''}${mode}`
          : `${toPascalCase(artboardName)}${isThirdPartyLogo ? toPascalCase(size || '') : (sizes.icon[size] && sizes.icon[size] !== svgrConfig.svgProps.width) ? toPascalCase(size || '') : ''}`
      );
      
      const componentFileName = `${componentName}.tsx`;

      // Converts SVG code into React code using SVGR library
      const componentCode = svgr.sync(svgCode, svgrConfigWithDimensions, {
        componentName,
      });

      // 6. Write generated component to file system
      fs.ensureDirSync(ICONS_DIRECTORY_PATH);
      fs.outputFileSync(
        path.resolve(ICONS_DIRECTORY_PATH, componentFileName),
        componentCode
      );
    });

    // 7. Generate index.ts
    console.log(chalk.yellowBright("-> Generating index file"));
    createIndex({
      componentsDirectoryPath: ICONS_DIRECTORY_PATH,
      indexDirectoryPath: INDEX_DIRECTORY_PATH,
      indexFileName: "index.ts",
    });

    console.log(chalk.greenBright("-> All done! ✅"));
  })
  .catch((err: unknown) => {
    console.error(err);
    process.exit(1);
  });

