export const sidescrollFunc = (e) => {
    let x = -e.wheelDelta / 2;
    window.scrollBy(x, 0);
    console.log(x);
}

//window.onwheel = sidescrollFunc;