import pyautogui as pag
import pyperclip
import time

pixel1, pixel2 = pag.pixel(150, 570), pag.pixel(1895,112)
match1 = pixel1 == (25, 28, 33)
match2 = pixel2 == (0, 160, 223)
if not match2:
    pag.click(1895, 112)
if (not match1) and match2:
    pag.hotkey('ctrl', 'shift', 'j')
    pag.click(1700, 860)
    pag.write("allow pasting")
    pag.press("enter")
    v = open('jsscript.txt', 'r')
    a = v.read()
    pyperclip.copy(a)
    pag.hotkey('ctrl', 'v')
    pag.press('enter')
    pag.press('f12')


