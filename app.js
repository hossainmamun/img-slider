const photos = ['image/pexels-burst-373883.jpg', 'image/pexels-burst-374857.jpg', 'image/pexels-connor-danylenko-2538122.jpg', 'image/pexels-creation-hill-1813862.jpg', 'image/pexels-designecologist-1779487.jpg']

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const sliderImage = document.getElementById('slider-img');

let count = 0;

nextBtn.addEventListener('click', () => {
    count++;
    if(count >= photos.length){
        count = 0
        sliderImage.src = photos[count];
    }
    else{
        sliderImage.src = photos[count];
    }
})

prevBtn.addEventListener('click', ()=> {
    count --;
    if(count < 0){
        count = photos.length - 1;
        sliderImage.src = photos[count];
    }
    else{
        sliderImage.src = photos[count];
    }
})