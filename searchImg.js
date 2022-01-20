// const request = require("request");
const NAVER_CLIENT_ID     = 'qfoGKj_AhdMjwBQeAn1F'
const NAVER_CLIENT_SECRET = 'oOUVo6EeS_'

window.onload = () => {
    console.log("onload")
    getUser()
}

// function loadImage() {
//     const link = document.getElementById('thumbnail').value;
//     document.getElementById("result").innerText = link;
// }

async function getUser() {
    const config = {
        headers: {
            'Authorization':'KakaoAK b62c85ae2923afa9548cf2e7734d7508'
        }
    };
    let condition = 'coat'

    // $.get({
    //     url:`https://openapi.naver.com/v1/search/image`,
    //     data: {
    //         "query": condition
    //     },
    //     crossDomain: true,
    //     headers: {
    //         'X-Naver-Client-Id':NAVER_CLIENT_ID,
    //         'X-Naver-Client-Secret':NAVER_CLIENT_SECRET
    //     },
    //     mode: 'no-cors',
    //     success: (data) => {
    //         console.log(data)
    // }});

    fetch(`https://dapi.kakao.com/v2/search/image?query=${condition}&size=1`, config)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            document.getElementById("outer1").setAttribute("src", "https://search4.kakaocdn.net/argon/130x130_85_c/8dmwmkRM5Ga");
            console.log(document.getElementsByClassName("recommendImage"));
            document.getElementsByTagName()
        })
        .catch(error => console.log(error));
}

// const option = {
//     query  :'코트', //이미지 검색 텍스트
//     start  :1, //검색 시작 위치
//     display:1, //가져올 이미지 갯수
//     sort   :'sim', //정렬 유형 (sim:유사도)
//     filter :'small' //이미지 사이즈
// }
//
// request.get({
//     uri:'https://openapi.naver.com/v1/search/image',
//     qs :option,
//     headers:{
//         'X-Naver-Client-Id':NAVER_CLIENT_ID,
//         'X-Naver-Client-Secret':NAVER_CLIENT_SECRET
//     }
// }, function(err, res, body) {
//     let json = JSON.parse(body)
//     console.log(json)
// })


