
import { Command } from "commander"
import ffmpeg from "fluent-ffmpeg"
import path from "path"
import fs from "fs"
import prompts from "prompts"
import { log } from "console"

type Mp4ToMp3Options = {
  input: string
}

export const mp4ToMp3 = async (dir: string) => {
  const mp4s = fs.readdirSync(dir).filter(file => file.endsWith(".mp4"))

  if (mp4s.length === 0) {
    console.log("Oups. No MP4's found in this directory.")
    process.exit(1)
  }

  const { value }: { value: string[] } = await prompts({
    type: "multiselect",
    name: "value",
    message: "Select a file to convert",
    choices: mp4s.map(mp4 => ({ title: mp4, value: mp4 }))
  })

  if (value.length === 0) {
    console.log("Oups. No MP4 file was selected.")
    process.exit(1)
  }

  for (const file of value) {
    const inputPath = path.join(dir, file)
    const outputFilePath = path.join(dir, path.basename(file, ".mp4") + ".mp3")

    console.log(`🎶 Converting ${file} to ${outputFilePath}...`);

    try {
      await new Promise((resolve, reject) => {
        ffmpeg(inputPath)
          .output(outputFilePath)
          .on("end", () => {
            console.log(`✅ Successfully converted: ${outputFilePath}`);
            resolve(null);
          })
          .on("error", (err) => {
            console.error(`❌ Error converting ${file}: ${err.message}`);
            reject(err);
          })
          .run();
      });
    } catch (error) {
      console.error(`❌ Conversion failed for ${file}:`, error);
    }
  }

  console.log(`🎉 All ${value.length} selected files have been converted!`);
}
