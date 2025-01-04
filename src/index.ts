#!/usr/bin/env node

import { Command } from "commander";
import fs from "fs";
import path from "path";
import prompts from "prompts";

import { version } from "../package.json";
import { mp4ToMp3 } from "./converters/mp4-mp3";
import { pngToJpg } from "./converters/png-jpg";
import { webmToPngJpg } from "./converters/webm-png-jpg";
import { mp4ToGif } from "./converters/mp4-gif";

/*
  This is the main entry point for the CLI application. The application is responsible for converting files from one format to another.
  The user is prompted to select the type of conversion they want to perform and the directory containing the files to convert.
  The application then performs the conversion based on the user's selection.
*/

const converters: Record<string, (dir: string) => Promise<void>> = {
  "MP4 to MP3": mp4ToMp3,
  "WEBM to PNG/JPG": webmToPngJpg,
  "MP4 to GIF": mp4ToGif,
  "PNG to JPG": pngToJpg,
};

async function main() {
  const program = new Command()
    .name("dzomo")
    .description("Convert your files from one format to another.")
    .argument("[directory]", "Directory to convert files from", ".")
    .version(
      version || "0.0.1",
      "-v, --version",
      "Display the version number"
    )
    .action(async (inputDir: string) => {
      const dirPath = path.resolve(inputDir);



      try {
        if (!fs.existsSync(dirPath) || !fs.lstatSync(dirPath).isDirectory()) {
          console.error("❌ Invalid directory path. Please provide a valid directory.");
          process.exit(1);
        }

        console.log(`📂 Using directory: ${dirPath}`);

        const { conversionType } = await prompts({
          type: "select",
          name: "conversionType",
          message: "Choose the type of conversion you want to perform:",
          choices: Object.keys(converters).map(type => ({ title: type, value: type })),
        });

        const converter = converters[conversionType];

        if (!converter) {
          console.error("❌ Invalid conversion type selected.");
          process.exit(1);
        }

        await converter(dirPath);

      } catch (error: any) {
        console.error("❌ An error occurred:", error.message);
        process.exit(1);
      }
    });

  program.parse();
}

main().catch((err) => {
  console.error("❌ Unexpected error:", err);
  process.exit(1);
});
