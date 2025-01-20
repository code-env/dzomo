import fs from "fs";
import path from "path";
import sharp from "sharp";
import prompts from "prompts";

export const webpToPng = async (dir: string) => {
  const webpFiles = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".webp"));

  if (webpFiles.length === 0) {
    console.log("❌ No WebP files found in this directory.");
    process.exit(1);
  }

  const { selectedFiles }: { selectedFiles: string[] } = await prompts({
    type: "multiselect",
    name: "selectedFiles",
    message: "Select WebP files to convert to PNG",
    choices: webpFiles.map((file) => ({ title: file, value: file })),
  });

  if (selectedFiles.length === 0) {
    console.log("❌ No files selected.");
    process.exit(1);
  }

  // Convert each selected file
  for (const file of selectedFiles) {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, path.basename(file, ".webp") + ".png");

    try {
      await sharp(inputPath).toFormat("png").toFile(outputPath);
      console.log(`✅ Successfully converted ${file} to ${outputPath}`);
    } catch (error: any) {
      console.error(`❌ Error converting ${file}:`, error.message);
    }
  }

  console.log("🎉 Conversion completed!");
};
