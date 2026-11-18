
// ===== 第二期：镜头播放控制 =====

const scene1 = document.querySelector(".scene-1");
const scene2 = document.querySelector(".scene-2");
const scene3 = document.querySelector(".scene-3");
const scene4 = document.querySelector(".scene-4");
const scene5 = document.querySelector(".scene-5");
const scene6 = document.querySelector(".scene-6");

const thought1 = document.querySelector(".thought-1");
const thought2 = document.querySelector(".thought-2");
const person = document.querySelector(".sleeping-person");

window.addEventListener("load", () => {

    // 第一幕：初始化思绪气泡
    thought1.style.opacity = "0";
    thought2.style.opacity = "0";

    // 第一条思绪出现
    setTimeout(() => {
        thought1.animate(
            [
                { opacity: 0, transform: "translateY(15px)" },
                { opacity: 1, transform: "translateY(0)" }
            ],
            {
                duration: 900,
                easing: "ease-out",
                fill: "forwards"
            }
        );
    }, 1000);

    // 第二条思绪出现
    setTimeout(() => {
        thought2.animate(
            [
                { opacity: 0, transform: "translateY(15px)" },
                { opacity: 1, transform: "translateY(0)" }
            ],
            {
                duration: 900,
                easing: "ease-out",
                fill: "forwards"
            }
        );
    }, 3000);

    // 人物轻微呼吸
    person.animate(
        [
            { transform: "translateY(0)" },
            { transform: "translateY(-2px)" },
            { transform: "translateY(0)" }
        ],
        {
            duration: 3500,
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );

    // 7秒后切换到第二幕
setTimeout(() => {

    scene1.classList.remove("active");
    scene2.classList.add("active");

    // 启动第二幕元素依次渐显
    setTimeout(() => {
        scene2.classList.add("show-elements");
    }, 300);

    // 第二幕播放10秒后，切换到第三幕
    setTimeout(() => {

        scene2.classList.remove("active");
        scene3.classList.add("active");

        // 启动第三幕元素依次渐显
        setTimeout(() => {
            scene3.classList.add("show-elements");
        }, 300);
                // 第三幕播放10秒后，切换到第四幕
        setTimeout(() => {

            scene3.classList.remove("active");
            scene4.classList.add("active");

            // 启动第四幕元素依次渐显
            setTimeout(() => {
                scene4.classList.add("show-elements");
            }, 300);

           // 第四幕播放10秒后，切换到第五幕
setTimeout(() => {

    scene4.classList.remove("active");
    scene5.classList.add("active");

    // 启动第五幕元素依次渐显
    setTimeout(() => {
        scene5.classList.add("show-elements");
    }, 300);

    // 第五幕播放10秒后，切换到第六幕
    setTimeout(() => {

        scene5.classList.remove("active");
        scene6.classList.add("active");

        // 启动第六幕元素依次渐显
        setTimeout(() => {
            scene6.classList.add("show-elements");
        }, 300);

    }, 10000);

}, 10000);

        }, 10000);

    }, 10000);

}, 7000);
});