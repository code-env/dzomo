import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function Demo() {
  const options = ["MP4 to MP3", "MP4 to Gif", "PNG to JPG", "WEBM to PNG/JPG"]
  return (
    <div
      id="demo"
      className="bg-gradient-to-t from-gr1 to-gr2 border rounded-md p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="size-full"
      >
        <div className="flex items-center space-x-1 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="font-mono text-sm text-neutral-700">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="font-bold text-green-500">
              <span className="font-bold text-2xl">→</span> Videos
              <span className="text-primary ml-2">dzomo .</span>
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-4"
          >
            📂 Using directory: /Videos
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            ? Choose the type of conversion you want to perform:
          </motion.div>
          <ul className="ml-4">
            {options.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 3.5 + index * 0.5 }}
                className={cn(index === 0 && "text-green-300")}
              >
                <span >
                  {index === 0 ? "❯" : "  "}
                </span> <span className={cn(index !== 0 && "ml-4", index === 0 && "underline")}>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
