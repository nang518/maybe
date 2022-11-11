const express = require('express')

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/maybe', (req, res) => {
    const url = "https://openapi.naver.com/v1/datalab/search"
    const headers = {
        'Content-Type' : 'application/json',
        'X-Naver-Client-Id' : "9mpUE8l_3rIhmgeeWQCf",
        'X-Naver-Client-Secret' : "exT2k10h1i",
    };

    const request_body = {
        "startDate": "2017-01-01",
        "endDate": "2017-04-30",
        "timeUnit": "month",
        "keywordGroups": [
            {
                "groupName": "한글",
                "keywords": [
                    "한글",
                    "korean"
                ]
            },
            {
                "groupName": "영어",
                "keywords": [
                    "영어",
                    "english"
                ]
            }
        ],
        "device": "pc",
        "ages": [
            "1",
            "2"
        ],
        "gender": "f"
    };

    fetch(url, {
        method : "POST",
        headers : headers,
        body : JSON.stringify(request_body),
    })
        .then((response) => response.json())
        .then((data)=> res.json({
            "success": true,
            data: data
        }));
})

app.listen(port, () => {
    console.log(`Server open on ${port} port`)
})