# IP Security Check - Extension 🔍
This tool allows you to analyze multiple IP addresses simultaneously. It uses the AbuseIPDB API to check the reputation of IPs and determine whether they are malicious.

## Features
-Analyze multiple IP addresses at the same time
-Retrieve threat scores and detailed information via AbuseIPDB
-Easy to use from the command line

## Requirements
- Node.js
- AbuseIPDB API Key

## Installation and Usage

### 🔧 Installation

1. Clone or download this repository to your local machine.
2. Open **Chrome** or **Brave** browser.
3. Go to `chrome://extensions/` in the address bar.
4. Enable **Developer mode** (toggle in the top-right corner).
5. Click **Load unpacked**.
6. Select the root directory of this extension (the folder containing `manifest.json`).

### 🚀 Usage

1. Click on the extension icon in your browser toolbar.
2. Paste one or multiple IP addresses into the input field.
3. Click **Check IPs**.
4. The tool will fetch data from **AbuseIPDB** and display:
   - Threat Score
   - Number of reports
   - Last reported date
   - Country and ISP information

> 🔑 Make sure to add your **AbuseIPDB API key** in the extension's settings or configuration file (e.g., `config.js`) before running checks.

![image](https://github.com/user-attachments/assets/784b8214-2ccc-4b28-a7b6-e6c527b8feff)

![image](https://github.com/user-attachments/assets/66bf7c11-b024-4aef-a276-041e9f6d8bf4)

![image](https://github.com/user-attachments/assets/48e85354-76af-4fa9-b9f2-581ebc0bbc28)

