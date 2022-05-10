let cubeAdd = _ => {
    //   Function to color a random cube
    function e(t) {
        if (t.getAttribute("class").split(" ").some((e) => "active" === e))
            return e(i[u(i.length)]);
        {
            let e = `rgba(${u(255)}, ${u(255)}, ${u(255)}, ${u(100)})`;
            for (let c = 0; c < t.children.length; c++)
                (t.children[c].style.backgroundColor = e), c + 1 === t.children.length && (t.children[c].style.filter = `drop-shadow(0 0 6px ${e})`);
            t.classList.add("active"), (t.style.transform = `translateZ(${u(100)}px)`);
        }
    }
    let t = Math.ceil((cubes.parentElement.offsetWidth + cube_d) / cube_d),
        c = Math.ceil((cubes.parentElement.offsetHeight + cube_d) / cube_d),
        r = (t - (t % 2)) / 2,
        l = t % 2,
        s = (c - (c % 2)) / 2,
        d = c % 2,
        n = -r * s,
        u = (e) => Math.floor(Math.random() * e),
        a = (e, t, c) => {
            let r = -1;
            (cd4 = document.createElement("div")),
                (cd4.style.cssText = `transform-style:preserve-3d;display:grid;grid-template-columns:repeat(${t},${cube_d}px);grid-template-rows:repeat(${c},${cube_d}px);`),
                cubes.appendChild(cd4);
            for (let l = 1; l <= t; l++) {
                let t = document.createElement("div");
                (t.style.cssText = `transform-style:preserve-3d;grid-area:1/${"lu" === e || "cu" === e || "cc" === e || "rc" === e || "lb" === e || "cb" === e ? l : "lc" === e || "ru" === e || "rb" === e ? -l - 1 : null}/span${c}/span1;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(${c}, 1fr);`), cd4.appendChild(t);
                for (let s = 1; s <= c; s++) {
                    let c = document.createElement("div"); (c.classList = "cub"), (c.style.cssText = `width:${cube_d}px;height:${cube_d}px;transform-style:preserve-3d;position:relative;z-index:${"lu" === e || "ru" === e || "lb" === e || "rb" === e ? n + (s + l) : "cu" === e || "lc" === e || "rc" === e || "cb" === e ? --r : "cc" === e ? r : null}`), "lu" === e || "ru" === e || "cc" === e || "cb" === e || "rc" === e ? t.appendChild(c) : ("lc" === e || "cu" === e || "lb" === e || "rb" === e) && t.prepend(c);
                    for (let e = 0; e < 5; e++)
                        c.appendChild(document.createElement("div"));
                }
            }
        };

    // to reset all cubes when resize the screen
    (cubes.innerHTML = ""),
        (cubes.parentElement.style.overflow = "hidden"),
        (cubes.style.cssText = `grid-template-columns:${0 === l ? "1fr 1fr" : `1fr ${l * cube_d}px 1fr`};grid-template-rows:${0 === d ? "1fr 1fr" : `1fr ${d * cube_d}px 1fr`}`),
        /*
          call a function to create the cubes.
          attention: some screens the width / 2 = floating point number (double)
          so I have fixed by
        */
        a("lu", r, s), 0 !== l && a("cu", l, s) /*this*/, a("ru", r, s), 0 !== d && a("lc", r, d) /*this and*/, 0 !== l && 0 !== d && a("cc", l, d) /*this and*/, 0 !== d && a("rc", r, d) /*this and*/, a("lb", r, s), 0 !== l && a("cb", l, s) /*this*/, a("rb", r, s);


    //   to color a random cube each 1s
    let i = document.querySelectorAll(".cub");
    clearInterval(counter),
        (counter = setInterval((t) => e(i[u(i.length)]), 1e3));
    i.forEach((t) => (t.onclick = (c) => e(t)));
}
let cubes = document.querySelector(".cubes"), cube_d = parseInt(cubes.getAttribute("class").split(" ").find((e) => "w" === e.charAt(0)).slice(1)), counter = 0;
(onload = (e) => cubeAdd()), (onresize = (e) => cubeAdd());
