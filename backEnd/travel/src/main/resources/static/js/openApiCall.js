/**
 * 공공 데이터 파싱하는 곳 -> 자세한건 깃허브 리드미에서 확인
 */
let ApiInfoKey = 'QsJbsoueaViy3V83e3WvrYl86auajeLHgIX3coFNj+U52UthL5Xd8Cv753XXEQU8ND4kZTUVh+2AxBtJBlmrmg=='
let accumulatedResult = "";
function callApiInfo(keyword){
//    keyword = '한옥마을'
    var searchKeyword = encodeURIComponent(keyword)
    var url = 'https://apis.data.go.kr/B551011/KorService1/searchKeyword1?MobileOS=AND&MobileApp=test&keyword='+searchKeyword+'&serviceKey=QsJbsoueaViy3V83e3WvrYl86auajeLHgIX3coFNj%2BU52UthL5Xd8Cv753XXEQU8ND4kZTUVh%2B2AxBtJBlmrmg%3D%3D&_type=json'

    fetch(url)
        .then(res => res.json())
        .then(myJson => {
            const items = myJson.response.body.items.item;
            for (const key in items) {
                const title = items[key].title;
                console.log('title: ${title}')
                openModal(title);
            }
        });
}
function openModal(values) {


  accumulatedResult += `검색 결과: ${values}<br>`;

  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = accumulatedResult;

  const modal = document.getElementById('myModal');

  // 모달 표시
  modal.style.display = 'block';

  // 결과 문자열을 클릭하면 검색 바에 입력
    const resultStrings = modalContent.querySelectorAll('p');
    resultStrings.forEach(resultString => {
      resultString.addEventListener('click', function() {
        document.getElementById('inputText').value = resultString.textContent;
      });
    });
}

// 모달 닫기
function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

// 모달 창 바깥 영역 클릭 시 모달 닫기 (선택사항)
window.onclick = function(event) {
  const modal = document.getElementById('myModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

function callApiPic(){

}