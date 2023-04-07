# kobert music visualization

https://koreascience.kr/article/JAKO202031458603832.pdf

# Development of the Artwork using Music Visualization based on Sentiment Analysis of Lyrics
## Description
본 프로젝트는 사용자가 원하는 노래 가사를 크롤링을 해온 후 NLP Modal에 인식 시켜 음악 가사의 감성분석을 해주는 프로젝트 입니다.

NLP 관련 프로젝트를 찾고 있을 때 김혜란 박사님의 논문을 보고 진행하게 되었다.
논문을 보면 이러한 연구를 한 계기를 '감정표현에 어려움을 겪는 발달 장애인들의 창작활동과 심리분석 및 의사소통을 용이하게 해주는 예술창작 및 교육 플랫폼으로 확장되기를 기대한다.'
라고 적혀 있다.

친척 중에도 청각 장애인분이 계신데 진동을 통해 음악을 들으신다. 거기에 더불어 다이나믹한 시각적 표현까지 더해지면 더욱 풍부한 음악을 느낄 수 있지 않을까 싶어서 개발하게 되었다.

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
