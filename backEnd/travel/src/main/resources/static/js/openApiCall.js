/**
 * 공공 데이터 파싱하는 곳 -> 자세한건 깃허브 리드미에서 확인
 */
let ApiInfoKey = 'QsJbsoueaViy3V83e3WvrYl86auajeLHgIX3coFNj+U52UthL5Xd8Cv753XXEQU8ND4kZTUVh+2AxBtJBlmrmg=='

function callApiInfo(keyword){
    keyword = '한옥마을'
    var searchKeyword = encodeURIComponent(keyword)
    var url = 'https://apis.data.go.kr/B551011/KorService1/searchKeyword1?MobileOS=AND&MobileApp=test&keyword='+searchKeyword+'&serviceKey=QsJbsoueaViy3V83e3WvrYl86auajeLHgIX3coFNj%2BU52UthL5Xd8Cv753XXEQU8ND4kZTUVh%2B2AxBtJBlmrmg%3D%3D&_type=json'
    fetch(url)
        .then(res => res.json())
        .then(myJson => {
            console.log(myJson);
        });



}


function callApiPic(){

}