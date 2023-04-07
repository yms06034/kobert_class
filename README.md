
# kobert music visualization
Development of the Artwork using Music Visualization based on Sentiment Analysis of Lyrics

## Description
본 프로젝트는 사용자가 원하는 노래 가사를 크롤링을 해온 후 NLP Modal에 인식 시켜 음악 가사의 감성분석을 해주는 프로젝트 입니다.

NLP 관련 프로젝트를 찾고 있을 때 김혜란 박사님의 논문을 보고 진행하게 되었다.
논문을 보면 이러한 연구를 한 계기를 '감정표현에 어려움을 겪는 발달 장애인들의 창작활동과 심리분석 및 의사소통을 용이하게 해주는 예술창작 및 교육 플랫폼으로 확장되기를 기대한다.' 라고 적혀 있다.

친척 중에도 청각 장애인분이 계신데 진동을 통해 음악을 들으신다. 
거기에 더불어 다이나믹한 시각적 표현까지 더해지면 더욱 **풍부한 음악**을 느낄 수 있지 않을까 싶어서 개발하게 되었다.

![6](https://user-images.githubusercontent.com/98085184/230531876-df7879e6-9231-40ad-b682-4b5146f54a6d.png) \
[서비스 흐름도]

## Project INFO
![4](https://user-images.githubusercontent.com/98085184/230531609-01fa48ca-22c6-434c-8dd7-a81b661a9b6c.png)

사용자가 입력한 노래를 가사만 크롤링 해와서 진행 이후 총 6개의 class를 색깔로 구분 \
![image](https://user-images.githubusercontent.com/98085184/230533799-512495e0-743f-4eef-9ea0-de19c9038403.png)

그 후 JS로 만든 공 구체로 보내 색으로 표현해준다. \
![image](https://user-images.githubusercontent.com/98085184/230533920-fe009a46-70e1-496d-bea3-bd08ca33d4ca.png)

### - PIPELINE
![5](https://user-images.githubusercontent.com/98085184/230531750-a0d2d303-2667-45be-bfbd-ad5892873deb.png)


## Environment

> Python Version 3.8


## Prerequisite
> Python
> 
> pip install -r requirements.txt
>
> npm i


## Files
`models/bertdataset.py` Kobert data

`models/classifier.py` Kobert classifier

`models/predict.py` Kobert predict

`routes/sing_route.py` Web Page of Predict Value & Crawling


##### 이전  회사에서 DA 진행을 할 때는 sklearn으로 ML만 진행 하였는데 이번 프로젝트를 통해 Deep learning을 조금이 나마 알게 되었다.
##### 챗봇이 아닌 Classifiter를 사용할 계획이라 Bert를 사용해서 진행했다.
##### Bert 논문을 보면서 모델 구조부터 천천히 익히면서 공부하였는데 확실한건 CNN보다 NLP 에 더 잘 맞는다는 것 이였다.
##### 또한 왜 NVIDIA가 큰 성공을 할 수 있는지 알 수 있던 계기가 되었다... (내 GPU...)


## Thesis Link
https://koreascience.kr/article/JAKO202031458603832.pdf

