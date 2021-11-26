const animationTargetElements = document.querySelectorAll('.text-animation');

animationTargetElements.forEach(element => {
    const targetElement = element;
    const texts = targetElement.textContent;
    const textArray = [];

    //元々HTMLに書かれていたテキストを空にする
    targetElement.textContent = '';

    //文字列<span>タグを付与して一文字ずつ配列に入れていく
    for (let i = 0; i < texts.split('').length; i++) {
        //取得した文字列が空白ならそのまま空白を戻す
        //文字が入っていればspanを付けて配列に入れる
        const t = texts.split('')[i];
        if (t === ' ') {
            textArray.push(' ');
        } else {
            textArray.push('<span style="animation-delay: '+ ((i * 0.15) + 0.2) +'s;">' + t + '</span>');   
        }

        //配列に入れたタグ付き文字をHTML該当箇所に入れていく
        targetElement.innerHTML += textArray[i];

    }
});