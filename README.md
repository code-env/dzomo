# Dzomo - File Conversion CLI Tool

Dzomo is a lightweight, command-line interface (CLI) tool that simplifies file conversion from one format to another directly from your terminal. With Dzomo, you can convert audio, video, and image files effortlessly, supporting various formats such as MP4 to MP3, PNG to JPG, WEBM to PNG/JPG, and MP4 to GIF.

## 🚀 Features
- 🎶 **MP4 to MP3:** Extract audio from video files.
- 🖼️ **PNG to JPG:** Convert image files to save space without losing quality.
- 🎥 **MP4 to GIF:** Create shareable GIFs from video clips.
- 🌐 **WEBM to PNG/JPG:** Get high-quality static images from video formats.
- 🛠️ **Simple and Fast:** Lightweight, easy-to-use, and efficient.

---

## 📦 Installation
Ensure you have **Node.js** and **npm** installed on your system.

```bash
npm install -g dzomo
```

---

## 📚 Usage
Run Dzomo from your terminal to convert files in your current directory.

### 1. Basic Command:
```bash
dzomo
```

### 2. Selecting a Directory:
```bash
dzomo [directory]
```

Dzomo will list the available files in the selected directory and allow you to choose the conversion type.

### 3. Supported Conversions:
- **MP4 to MP3**
- **PNG to JPG**
- **WEBM to PNG/JPG**
- **MP4 to GIF**

---

## ⚙️ How It Works
1. **Run Dzomo** from your terminal.
2. **Select the file(s)** you want to convert.
3. **Choose the conversion type** from the provided list.
4. Dzomo handles the rest! 🎉

---

## 📄 Example
### Convert all MP4 files in the current directory to MP3:
```bash
dzomo
```
Output:
```bash
📂 Using directory: /home/user/videos
✔ Select a file to convert › example.mp4
🎶 Converting example.mp4 to /home/user/videos/example.mp3...
🎉 Conversion complete!
```

---

## 🔧 Development
If you want to contribute or modify Dzomo:

1. Clone the repository:
 ```bash
git clone https://github.com/code-env/dzomo.git
   ```

2. Navigate to the project folder:
 ```bash
cd dzomo
   ```
3. Install dependencies:
  ```bash
pnpm install
   ```
4. Run the tool locally:
```bash
pnpm start
   ```

---

## 🧪 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve Dzomo.

1. Fork the repository.
2. Create your feature branch:
  ```bashA
git checkout -b feature/new-feature
   ```
3. Commit your changes:
 ```bash
git commit -m 'Add new feature'
   ```
4. Push to the branch:
  ```bash
git push origin feature/new-feature
```

5. Open a pull request.

After your pull request is merged, you can safely delete your branch.

## 📝 License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.


## 🌟 Acknowledgements
- Built with ❤️ by [Bossadi Zenith.](https://x.com/bossadizenith)
- Inspired by the need for a simple and efficient file conversion tool for developers.


## 📧 Contact
For any questions or feedback, feel free to reach out via:
- **GitHub:** [https://github.com/code-env](https://github.com/code-env)
- **Email:** hello@bossadizenith.com
