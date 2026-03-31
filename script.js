// script.js

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');
    // 你希望展示的身份标签
    const phrases = [
        "全栈开发工程师",
        "React/Next.js 专家",
        "Golang 探索者",
        "UI/UX 美学执着者"
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100; // 打字速度

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            // 删除字符
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // 删除时加速
        } else {
            // 添加字符
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100; // 正常打字速度
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            // 一句话打完，停顿一下
            isDeleting = true;
            typeSpeed = 2000; // 停顿 2 秒
        } else if (isDeleting && charIndex === 0) {
            // 一句话删完，切换下一句
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // 切换前停顿 0.5 秒
        }

        setTimeout(type, typeSpeed);
    }

    // 开始打字循环
    if (phrases.length > 0) {
        type();
    }
});
