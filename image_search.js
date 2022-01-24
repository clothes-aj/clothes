window.onload = () => {
    console.log("onload")
    setClothesImage()
    // setJsonTemp()
}

async function setClothesImage() {
    const config = {
        headers: {
            'Authorization':'KakaoAK b62c85ae2923afa9548cf2e7734d7508'
        }
    };

    const arr = ['코트', '가죽자켓', '야상', '기모맨투맨', '니트', '기모후드티', '청바지', '슬랙스', '트레이닝바지'];
    for (let i = 0; i < arr.length; i++) {
        fetch(`https://dapi.kakao.com/v2/search/image?query=${arr[i]}&size=1`, config)
            .then(response => response.json())
            .then(response => {
                // console.log(response)
                document.getElementById(`clothes${i+1}`).setAttribute("src", response.documents[0].thumbnail_url);
            })
            .catch(error => console.log(error));
    }
}

// async function setJsonTemp() {
//     const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
//     const request = new Request(requestURL);
//
//     const response = await fetch(request);
//     const setJson = await response.json();
//
//     const temps = setJson['content'];
//     for (const temp of temps) {
//         document.getElementById('clothes1').setAttribute("alt", `${temp.temperature}`);
//         document.getElementById('clothes1').setAttribute("alt", `${temp.temperature}`);
//         document.getElementById('clothes1').setAttribute("alt", `${temp.temperature}`);
//     }
//
// }


