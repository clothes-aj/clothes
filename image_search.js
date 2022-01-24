window.onload = () => {
    console.log("onload")
    getUser()
}

async function getUser() {
    const config = {
        headers: {
            'Authorization':'KakaoAK b62c85ae2923afa9548cf2e7734d7508'
        }
    };
    let condition = 'coat'

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


