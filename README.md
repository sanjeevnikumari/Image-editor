# 🖼️ Image Editor

A simple web-based Image Editor built using **HTML, CSS, and JavaScript**.  
Users can upload an image, apply filters, preview changes in real time, and download the edited image.

---

## 🚀 Features

- 📂 Upload Image  
- 🎚️ Adjust Filters (Brightness, Contrast, Saturation, etc.)  
- 🔄 Reset to Original  
- 💾 Download Edited Image  
- 🖥️ Live Preview using Canvas API  

---

## 🛠️ Tech Stack

- HTML  
- CSS  
- JavaScript  
- Canvas API  

---

## 📂 Project Structure

```
├── index.html
├── style.css
└── script.js
```

---

## 📥 How It Works

1. Upload an image from your device.  
2. Adjust filter sliders to edit the image.  
3. Click **Download** to save the edited image.  
4. Use **Reset** to restore the original image.

---

## 💾 Download Function

```javascript
download.addEventListener('click', () => {
    let link = document.createElement('a');
    link.download = "edited-image.png";
    link.href = canvas.toDataURL();
    link.click();
});
```

---

## 👩‍💻 Author

Developed by **Sanjeevni Kumari**
<img width="1322" height="621" alt="Screenshot 2026-02-20 093505" src="https://github.com/user-attachments/assets/d52863bc-47c8-450e-bdc0-2461b656a4d3" />

