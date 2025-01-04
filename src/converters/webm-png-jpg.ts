import fs from "fs";
import path from "path";
import ffmpeg from "fluent-ffmpeg";
import prompts from "prompts";
export const webmToPngJpg = async (dir: string) => {
  const webms = fs.readdirSync(dir).filter(file => file.endsWith(".webm"));

  if (webms.length === 0) {
    console.log("❌ No WEBM files found.");
    process.exit(1);
  }

  const { value } = await prompts({
    type: "multiselect",
    name: "value",
    message: "Select WEBM files to convert:",
    choices: webms.map(file => ({ title: file, value: file })),
  });

  for (const file of value) {
    const inputPath = path.join(dir, file);
    const outputPngPath = path.join(dir, path.basename(file, ".webm") + ".png");
    const outputJpgPath = path.join(dir, path.basename(file, ".webm") + ".jpg");

    console.log(`🎥 Converting ${file} to PNG and JPG...`);

    // Convert to PNG
    await new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .output(outputPngPath)
        .on("end", resolve)
        .on("error", reject)
        .run();
    });
    console.log(`✅ Converted to PNG: ${file}`);

    // Convert to JPG
    await new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .output(outputJpgPath)
        .on("end", resolve)
        .on("error", reject)
        .run();
    });
    console.log(`✅ Converted to JPG: ${file}`);
  }
};
