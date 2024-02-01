import pyautogui as pag
import time

while True:
    x,y = pag.position()
    print(x, y, pag.pixel(x, y))
    time.sleep(1)