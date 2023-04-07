# kobert music visualization

https://koreascience.kr/article/JAKO202031458603832.pdf
# 2021-Probono Project
# 노약자를 위한 공개용 STT API를 이용한 인공지능 보이스피싱 방지 시스템 👵👴
# AI voice phishing prevention system using STT API for the elderly and the weak
#### Project nickname : 피싱빠슝
#### Project execution period : 2021.04.30~2021.12
#### Project Hosting : [한이음](https://www.hanium.or.kr/portal/index.do)
#### GIT LAB URL : [GIT LAB](https://lab.hanium.or.kr/21_PF020/21_pf020)
-----------------------
## Description
피싱빠슝은 보이스피싱 취약계층을 위한 보이스피싱 경고 시스템으로, 유선 전화나 인터넷 전화에서의 통화내용을 실시간으로 분석하고, 보이스피싱일 경우 LED로 경고한다.

스마트폰 분야에는 이미 AI로 통화내용을 분석해 보이스피싱을 잡아내는 앱이 출시되어 사용되고있다. 그러나 인터넷 전화나 유선전화에는 보이스피싱을 예방하기 위한 하드웨어와 소프트웨어가 없는 실정이다. 따라서 대화 내용을 실시간으로 분석해 보이스피싱 여부를 가려내기 위한 시스템 개발이 필요하며, 특히나 보이스피싱 취약계층을 위해 개발되어야 한다.

![4](https://user-images.githubusercontent.com/78933101/135657969-f8fc5a76-8936-4134-9654-5ed6ee7e804b.png)
서비스 흐름도

### 1. function list
![noname01](https://user-images.githubusercontent.com/78933101/135653625-d14db805-ab5e-4505-a7b0-5d0a3af2ad59.png)

|구분|기능|구현|
|------|---|---|
|S/W|통화데이터 추출|SNIFFING|
|S/W|음성 데이터 텍스트 변환|STT OPEN API(ETRI)|
|S/W|데이터 분석|Deep Learning|
|H/W|분석 모듈|Raspberry Pi 4|

### 2. detailed function
#### Software
![2](https://user-images.githubusercontent.com/78933101/135657961-cbbc1775-37d0-42d4-a47c-26850674f580.png)
S/W 구성도

- 통화데이터 추출 : VoIP 통화를 스니핑하여 통화 데이터를 추출하는 프로그램
- 음성 데이터 텍스트 변환 : 추출한 음성 데이터를 텍스트 데이터로 변환하는 프로그램

- 데이터 분석 : 입력된 텍스트 데이터를 분석하는 딥러닝 모델

#### Hardware
![3](https://user-images.githubusercontent.com/78933101/135657965-bb2b59b6-2887-49ff-a519-40310c5dc971.png)
H/W 구성도

 - 분석 모듈 : 위 소프트웨어들이 포팅된 라즈베리파이를 이용한 분석 모듈


## Environment

> Python Version 3.9.7 (Window)
> 
> Raspberry Pi 4 Model B (Linux Ubunto)


## Prerequisite
> JAVA
> 
> from konlpy.tag import Okt
>
> import numpy as np
>
> import pandas as pd
>
> from tensorflow import keras
> 
> from tensorflow.keras.preprocessing.text import Tokenizer
> 
> from tensorflow.keras.preprocessing.sequence import pad_sequences
> 
> from sklearn.model_selection import train_test_split


## Files
`KorEDA_yes.py` Data Augmentation

`KorEDA_not.py` Data Augmentation

`wordnet.pickle` Word Dictionary

`ETRI_STT.py` STT ETRI Open API

`STTpreprocessing.py` Speech to Text & Preprocessing

`VOICETEST1.wav` Voice file

`VOICETEST2.wav` Voice file

`VOICETEST3.wav` Voice file

`model.py` RNN Model ML Engine

`yesvp.txt` voice phishing  txt file

`notvp.txt` not phishing txt file

`stop_words_new` stop words txt file

`main.py` Main 


## Usage 
`main.py`
