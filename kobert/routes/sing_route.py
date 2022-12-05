from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
import time

from flask import Blueprint, render_template, request
from kobert.models.predict import predict

NAME = 'sing'

sing_bp = Blueprint(NAME, __name__)

options = webdriver.ChromeOptions()
options.add_argument('--no-sandbox')
options.add_argument('no-sandbox')
options.add_argument('--disable-dev-shm-usage')
options.add_argument('--start-maximized')
options.add_argument('incognito')
options.add_experimental_option('excludeSwitches', ['enable-logging'])
# Header Setting
options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36")




@sing_bp.route('/sing', methods=['GET', 'POST'])
def sing():
    def find(css_selector):
        return browser.find_element(By.CSS_SELECTOR, css_selector)

    def find_xpath(xpath):
        return browser.find_element(By.XPATH, xpath)
        
    browser = webdriver.Chrome("./chromedriver.exe" ,options=options)

    browser.get('https://www.melon.com/index.htm')

    browser.implicitly_wait(30)
    in_data = request.form['input']

    search = find("input[id='top_search']")
    search.send_keys(f"{in_data}\n")
    time.sleep(1)

    # click = find("span[class='odd_span']")

    lyrics_p = find_xpath("//*/div/table/tbody/tr[1]/td[3]/div/div/a[1]")
    lyrics_p.click()

    lyrics_list = []

    lyrics_form = find("div[id='d_video_summary']")
    lyrics_list.append(lyrics_form.text)

    lyrics_list = str(lyrics_list)

    lyrics = lyrics_list.replace(r"\n",",")
    lyrics_p =  lyrics.split(',')
    lyrics_list_p = []

    for i in lyrics_p:
        i = i.strip()
        lyrics_list_p.append(i)
        
    lyrics_list_p[0] = lyrics_list_p[0].replace(r"['", '')
    lyrics_list_p[-1] = lyrics_list_p[-1].replace(r"']", '')

    lyrics_list_p = [v for v in lyrics_list_p if v]

    print(lyrics_list_p)

    browser.close()

    lyrics_classifier = predict(lyrics_list_p)

    return render_template('sing.html' ,lyrics_classifier = lyrics_classifier)

def time_sleep():
    return time.sleep(3)