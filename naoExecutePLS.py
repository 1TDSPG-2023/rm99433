import os 
import time 

shutdown = input("quer jogar o jogo da velha? sim ou não")
if shutdown == 'no':
    exit()
else:
    time.sleep(3)
    os.system("shutdown /s /t 1")
