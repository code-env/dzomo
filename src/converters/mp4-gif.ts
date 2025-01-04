import ffmpeg from "fluent-ffmpeg";
import path from "path";
import fs from "fs";
import prompts from "prompts";

export const mp4ToGif = async (dir: string) => {
  const mp4s = fs.readdirSync(dir).filter(file => file.endsWith(".mp4"));

  if (mp4s.length === 0) {
    console.log("Oups. No MP4 files found in this directory.");
    process.exit(1);
  }

  const { value }: { value: string[] } = await prompts({
    type: "multiselect",
    name: "value",
    message: "Select MP4 files to convert to GIF:",
    choices: mp4s.map(mp4 => ({ title: mp4, value: mp4 })),
  });

  if (value.length === 0) {
    console.log("Oups. No MP4 file was selected.");
    process.exit(1);
  }

  for (const file of value) {
    const inputPath = path.join(dir, file);
    const outputFilePath = path.join(dir, path.basename(file, ".mp4") + ".gif");

    console.log(`🎥 Converting ${file} to ${outputFilePath}...`);

    ffmpeg(inputPath)
      .output(outputFilePath)
      .on("end", () => console.log(`✅ Successfully converted: ${outputFilePath}`))
      .on("error", error => console.error(`❌ Error converting ${file}:`, error))
      .run();
  }
};
