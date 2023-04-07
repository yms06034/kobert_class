
# kobert music visualization
Development of the Artwork using Music Visualization based on Sentiment Analysis of Lyrics

## Description
본 프로젝트는 사용자가 원하는 노래 가사를 크롤링을 해온 후 NLP Modal에 인식 시켜 음악 가사의 감성분석을 해주는 프로젝트 입니다.

NLP 관련 프로젝트를 찾고 있을 때 김혜란 박사님의 논문을 보고 진행하게 되었다.
논문을 보면 이러한 연구를 한 계기를 '감정표현에 어려움을 겪는 발달 장애인들의 창작활동과 심리분석 및 의사소통을 용이하게 해주는 예술창작 및 교육 플랫폼으로 확장되기를 기대한다.' 라고 적혀 있다.

친척 중에도 청각 장애인분이 계신데 진동을 통해 음악을 들으신다. 
거기에 더불어 다이나믹한 시각적 표현까지 더해지면 더욱 **풍부한 음악**을 느낄 수 있지 않을까 싶어서 개발하게 되었다.

![6](https://user-images.githubusercontent.com/98085184/230531876-df7879e6-9231-40ad-b682-4b5146f54a6d.png)
[서비스 흐름도]

## Project INFO
![4](https://user-images.githubusercontent.com/98085184/230531609-01fa48ca-22c6-434c-8dd7-a81b661a9b6c.png)

### - PIPELINE
![5](https://user-images.githubusercontent.com/98085184/230531750-a0d2d303-2667-45be-bfbd-ad5892873deb.png)


## Environment

> Python Version 3.8


## Prerequisite
> Python
> 
> pip install -r requirements.txt
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
