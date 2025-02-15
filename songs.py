from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import time

def scrape_tiktok_music():
    options = Options()
    options.headless = False  # Set to False to see browser activity
    options.add_argument("--disable-blink-features=AutomationControlled")
    options.add_argument("--window-size=1920,1080")

    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=options)

    url = "https://ads.tiktok.com/business/creativecenter/inspiration/popular/music/pc/en"
    driver.get(url)

    # Wait until the page has loaded
    time.sleep(5)  

    # Scroll down multiple times to load more songs
    for _ in range(3):
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(2)  # Allow time for content to load

    # Wait for the presence of at least one music card
    try:
        WebDriverWait(driver, 20).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "div[class*='ItemCard_centerContent']"))
        )
    except:
        print("Music elements not found. The page structure might have changed.")
        driver.quit()
        return []

    # Extract song names and artist names
    music_data = []
    song_items = driver.find_elements(By.CSS_SELECTOR, "div[class*='ItemCard_centerContent']")

    for item in song_items:
        try:
            song_name = item.find_element(By.CSS_SELECTOR, "span[class*='ItemCard_musicName']").text
            artist_name = item.find_element(By.CSS_SELECTOR, "span[class*='ItemCard_autherName']").text
            music_data.append({"song": song_name, "artist": artist_name})
        except Exception as e:
            print(f"Skipping an item due to error: {e}")
            continue

    driver.quit()
    return music_data

# Run the function
music_list = scrape_tiktok_music()
print(f"Total Songs Scraped: {len(music_list)}")
for music in music_list:
    print(music)
