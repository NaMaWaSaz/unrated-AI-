import subprocess

try:
    result = subprocess.run(["chromedriver", "--version"], capture_output=True, text=True, check=True)
    print("✅ ChromeDriver found:", result.stdout.strip())
except FileNotFoundError:
    print("❌ ChromeDriver not found. Make sure it's installed and in the PATH.")
except subprocess.CalledProcessError as e:
    print("❌ Error running ChromeDriver:", e)
import requests
from bs4 import BeautifulSoup

# Replace with your actual cookies from your browser
cookies = {
    "auth_token": "7SmKuX1ou6LYswaKVTJLiBJTJ",
    "ct0": "OYnStfqI1qITTa8wavAXSvjkkzY7I8JciMI6ifuoQpBzbUd88b",

}

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
    "Referer": "https://twitter.com/explore",
}

# Twitter Trends URL
url = "https://twitter.com/i/api/2/guide.json"

# Make the request
response = requests.get(url, headers=headers, cookies=cookies)

# Check response status
if response.status_code == 200:
    data = response.json()
    
    # Extract trends (adjust this based on response structure)
    trends = data.get("timeline", {}).get("instructions", [])[0].get("addEntries", {}).get("entries", [])

    for trend in trends:
        print(trend)  # Debugging: Check the structure
    
else:
    print("Failed to fetch trends. Status code:", response.status_code)
