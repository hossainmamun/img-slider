const imgArr = [
  "./image/cat.jpg",
  "./image/fish.jpg",
  "./image/lion.jpg",
  "./image/puppy.jpg",
  "./image/tiger.jpg",
  "./image/wood_cat.jpg",
];
const imgSlider = document.querySelector("#slider-img");
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");

let count = 0;

// next function
nextBtn.onclick = () => {
  count++;
  if (count >= imgArr.length) {
    count = 0;
    imgSlider.src = imgArr[count];
  }
  imgSlider.src = imgArr[count];
};

// prev function
prevBtn.onclick = () => {
  count--;
  if (count < 0) {
    count = imgArr.length - 1;
    imgSlider.src = imgArr[count];
  }
  imgSlider.src = imgArr[count];
};
