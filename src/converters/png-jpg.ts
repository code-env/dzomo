import fs from "fs";
import path from "path";
import sharp from "sharp";
import prompts from "prompts";

export const pngToJpg = async (dir: string) => {
  const pngs = fs.readdirSync(dir).filter(file => file.endsWith(".png"));
  if (pngs.length === 0) {
    console.log("❌ No PNG files found.");
    process.exit(1);
  }

  const { value } = await prompts({
    type: "multiselect",
    name: "value",
    message: "Select PNG files to convert to JPG:",
    choices: pngs.map(file => ({ title: file, value: file })),
  });

  for (const file of value) {
    const inputPath = path.join(dir, file);
    const outputFilePath = path.join(dir, path.basename(file, ".png") + ".jpg");

    console.log(`🖼️ Converting ${file} to JPG...`);
    await sharp(inputPath).jpeg().toFile(outputFilePath);
    console.log(`✅ Converted: ${file}`);
  }
};
