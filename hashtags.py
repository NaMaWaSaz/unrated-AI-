from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

def scrape_tiktok_hashtags():
    options = Options()
    options.headless = True  # Run in headless mode (no UI)
    options.add_argument("--disable-blink-features=AutomationControlled")
    options.add_argument("--window-size=1920,1080")

    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=options)

    url = "https://ads.tiktok.com/business/creativecenter/inspiration/popular/hashtag/pc/en?from=001010"
    driver.get(url)

    # Wait for the container to appear
    try:
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "#hashtagItemContainer > div"))
        )

        hashtags = []
        hashtag_items = driver.find_elements(By.CSS_SELECTOR, "#hashtagItemContainer > div")

        for item in hashtag_items:
            try:
                name = item.find_element(By.CSS_SELECTOR, "div.CardPc_title__Cx6Ph > span").text
                other_info = item.find_element(By.CSS_SELECTOR, "div.CardPc_otherInfoContainer__JEM3n > div").text

                hashtags.append({"name": name, "topic": other_info})
            except Exception as e:
                continue
    finally:
        driver.quit()

    return hashtags

# Run the function
hashtags = scrape_tiktok_hashtags()
print( len (hashtags))
for hashtag in hashtags:
    print(hashtag)