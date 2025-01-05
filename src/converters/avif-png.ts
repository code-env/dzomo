import fs from "fs";
import path from "path";
import prompts from "prompts";
import sharp from "sharp";

export const avifToPng = async (dir: string) => {
  // List all AVIF files in the given directory
  const avifFiles = fs.readdirSync(dir).filter(file => file.endsWith(".avif"));

  if (avifFiles.length === 0) {
    console.log("❌ No AVIF files found in this directory.");
    process.exit(1);
  }

  // Prompt user to select the files to convert
  const { selectedFiles }: { selectedFiles: string[] } = await prompts({
    type: "multiselect",
    name: "selectedFiles",
    message: "Select AVIF files to convert to PNG",
    choices: avifFiles.map(file => ({ title: file, value: file }))
  });

  if (selectedFiles.length === 0) {
    console.log("❌ No files selected.");
    process.exit(1);
  }

  // Convert each selected file
  for (const file of selectedFiles) {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, path.basename(file, ".avif") + ".png");

    try {
      await sharp(inputPath).toFormat("png").toFile(outputPath);
      console.log(`✅ Successfully converted ${file} to ${outputPath}`);
    } catch (error: any) {
      console.error(`❌ Error converting ${file}:`, error.message);
    }
  }

  console.log("🎉 Conversion completed!");
};
