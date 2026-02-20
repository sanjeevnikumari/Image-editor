let filters = {
    brightness: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    saturation: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    hueRotation: {
        value: 0,
        min: 0,
        max: 360,
        unit: 'deg'
    },
    blur: {
        unit: 'px',
        min: 0,
        max: 20,
        value: 0
    },
    grayscale: {
        unit: '%',
        min: 0,
        max: 100,
        value: 0,
    },
    sepia: {
        unit: '%',
        min: 0,
        max: 100,
        value: 0,
    },
    opacity: {
        unit: '%',
        min: 0,
        max: 100,
        value: 100,
    },
    invert: {
        unit: '%',
        min: 0,
        max: 100,
        value: 0,
    }
}

const container = document.querySelector('.filters');
const canvas = document.querySelector('canvas');
const imgSec = document.querySelector('#image-sec');
const canvasCntx = canvas.getContext("2d");
const placehold = document.querySelector(".placeholder")
const reset = document.querySelector("#reset");
const download = document.querySelector("#download");
let image = null ;
let file = null ;

function seterimage(name, min, max, unit, value){
    const elem = document.createElement('div');
    elem.classList.add('filter');

    const input = document.createElement('input');
    input.type = "range";
    input.name = name;
    input.min = min;
    input.max = max;
    input.dataset.unit = unit;
    input.value = value
    

    const p = document.createElement('p');
    p.innerText = name

    elem.appendChild(p)
    elem.appendChild(input)
    
    input.addEventListener("input",(e)=>{
    filters[name].value = input.value
    canvasfilters()
    
})
    return elem

}

function createFilters(){
Object.keys(filters).forEach(key =>{
   const f = filters[key];
   const filtElem = seterimage(
    key,
    f.min,
    f.max,
    f.unit,
    f.value
   )
    container.appendChild(filtElem)    
})
}

createFilters()
imgSec.addEventListener("change",(elem)=>{
    file = elem.target.files[0]
    console.log(file);
    placehold.style.display = 'none'
    canvas.style.display = 'block'

    image = new Image();
    image.src = URL.createObjectURL(file)

    image.onload = ()=>{
        canvas.width = image.width
        canvas.height = image.height
        canvasCntx.clearRect(0, 0, canvas.width, canvas.height);
        canvasCntx.drawImage(image, 0, 0)

    }

})

function canvasfilters() {
    if (!image) return;

    canvasCntx.clearRect(0, 0, canvas.width, canvas.height);

    canvasCntx.filter = `
        brightness(${filters.brightness.value}${filters.brightness.unit})
        contrast(${filters.contrast.value}${filters.contrast.unit})
        saturate(${filters.saturation.value}${filters.saturation.unit})
        hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
        blur(${filters.blur.value}${filters.blur.unit})
        grayscale(${filters.grayscale.value}${filters.grayscale.unit})
        sepia(${filters.sepia.value}${filters.sepia.unit})
        opacity(${filters.opacity.value}${filters.opacity.unit})
        invert(${filters.invert.value}${filters.invert.unit})
    `;

    canvasCntx.drawImage(image, 0, 0);
    
}
const presetsCont = document.querySelector('.presets');
reset.addEventListener("click",()=>{
    filters = {
    brightness: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    saturation: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    hueRotation: {
        value: 180,
        min: 0,
        max: 360,
        unit: 'deg'
    },
    blur: {
        unit: 'px',
        min: 0,
        max: 20,
        value: 0
    },
    grayscale: {
        unit: '%',
        min: 0,
        max: 100,
        value: 0,
    },
    sepia: {
        unit: '%',
        min: 0,
        max: 100,
        value: 0,
    },
    opacity: {
        unit: '%',
        min: 0,
        max: 100,
        value: 100,
    },
    invert: {
        unit: '%',
        min: 0,
        max: 100,
        value: 0,
    }
}
canvasfilters();

container.innerHTML = ""
createFilters()

})

download.addEventListener('click',()=>{
    let link = document.createElement('a');
    link.download  = "edited-image.png";
    link.href = canvas.toDataURL();
    link.click()
})

const presets = {
  normal: {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hueRotation: 180,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  warm: {
    brightness: 110,
    contrast: 105,
    saturation: 120,
    hueRotation: 160,
    blur: 0,
    grayscale: 0,
    sepia: 20,
    opacity: 100,
    invert: 0
  },

  cool: {
    brightness: 95,
    contrast: 110,
    saturation: 90,
    hueRotation: 200,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  vintage: {
    brightness: 105,
    contrast: 90,
    saturation: 80,
    hueRotation: 170,
    blur: 1,
    grayscale: 10,
    sepia: 35,
    opacity: 100,
    invert: 0
  },

  blackWhite: {
    brightness: 110,
    contrast: 120,
    saturation: 0,
    hueRotation: 180,
    blur: 0,
    grayscale: 100,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  dramatic: {
    brightness: 95,
    contrast: 140,
    saturation: 130,
    hueRotation: 180,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  inverted: {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hueRotation: 180,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 100
  }
};

Object.keys(presets).forEach(presetName =>{
    let preBtn = document.createElement('button');
    preBtn.classList.add("btn")
    preBtn.innerText = presetName
    presetsCont.appendChild(preBtn)

    preBtn.addEventListener("click", ()=>{
        const preset = presets[presetName]
        
        Object.keys(preset).forEach(xy =>{
            filters[xy] .value = preset[xy]
            
        })
        canvasfilters() 
        container.innerHTML = ""
        createFilters()
    })
})