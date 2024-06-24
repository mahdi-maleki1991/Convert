
const Converts = [
    { id: 0, des: '  Fahrenheit  ° & Celsius ° ', changeValue: true, defPlaceholder: 'F °  To  C °' },
    { id: 1, des: '  Metr  & Foot ', changeValue: true, defPlaceholder: 'M  To  Foot' },
    { id: 3, des: '  Metr & Centimeter ', changeValue: true, defPlaceholder: 'M  To  CM' },
    { id: 2, des: '  Centimeter & Inch ', changeValue: true, defPlaceholder: 'CM  To  Inch' },
    { id: 4, des: '  Kilometr & Mile ', changeValue: true, defPlaceholder: 'KM  To  MI' },
]
// -------------------------------
let divmainAllQA = document.querySelector('.divmainAllQA')



// -------------------------------

regesterPW()
function regesterPW() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./pw.js').then((result) => {
            console.log('serviceWorker is made...');
        }).catch((err) => {
            console.log('YourserverWorger Registration Error:  ', err);
        });
    } else {
        alert('Your browser does not support serviceWorker !')
    }
}


convertGeneration()
function convertGeneration() {
    divmainAllQA.innerHTML = ''
    Converts.forEach((QA, index) => {
        divmainAllQA.innerHTML += `
            <div class="divMAinQA">
                <div class="divQ" onclick="openCloceAnswer(${index})">${QA.des}</div>
                <div class="divA">
                <input type="number" class="inputs" placeholder='${QA.defPlaceholder}'>
                
                <button type="button" class="btnChange" onclick='changePlaceHolder(${index})'>
                    <i class="bi bi-arrow-repeat"></i>
                    Change
                </button>

                <button class="btnS" type="button" onclick='convertProcess(${index})'>
                    <i class="bi bi-cpu"></i>
                    Convert
                </button>

                    <span class='spanAnswerResult'> 0 </span>
                </d>
        `
    })
}


function convertProcess(index) {
    let spanAnswerResult = document.querySelectorAll('.spanAnswerResult')
    let inputs = document.querySelectorAll('.inputs')
    let result = 0
    // ------------
    switch (index) {
        case 0:
            if (Converts[index].changeValue) {
                result = (Number(inputs[index].value) - 32) * 5 / 9
                spanAnswerResult[index].innerHTML = `${inputs[index].value} F° Is ${result.toFixed(3)} C°`
            } else {
                result = (Number(inputs[index].value * 9 / 5) + 32)
                spanAnswerResult[index].innerHTML = `${inputs[index].value} C° Is ${result.toFixed(3)} F°`
            }
            break;
        case 1:
            if (Converts[index].changeValue) {
                result = (Number(inputs[index].value) / 30.48)
                spanAnswerResult[index].innerHTML = `${inputs[index].value} M Is ${result.toFixed(3)} Foot`
            } else {
                result = (Number(inputs[index].value) * 30.48)
                spanAnswerResult[index].innerHTML = `${inputs[index].value} Foot Is ${result.toFixed(3)} M`
            }
            break

        case 2:
            if (Converts[index].changeValue) {
                result = (Number(inputs[index].value) / 2.54)
                spanAnswerResult[index].innerHTML = `${inputs[index].value} CM Is ${result.toFixed(3)} Inch`
            } else {
                result = (Number(inputs[index].value) * 2.54)
                spanAnswerResult[index].innerHTML = `${inputs[index].value} Inch Is ${result.toFixed(3)} CM`
            }
            break
        case 3:
            if (Converts[index].changeValue) {
                result = (Number(inputs[index].value) * 100)
                spanAnswerResult[index].innerHTML = `${inputs[index].value} M Is ${parseFloat(result.toFixed(3))} CM`
            } else {
                result = (Number(inputs[index].value) / 100)
                spanAnswerResult[index].innerHTML = `${inputs[index].value} CM Is ${result.toFixed(3)} M`
            }
            break
        case 4:
            if (Converts[index].changeValue) {
                result = (Number(inputs[index].value) / 1.609344)
                spanAnswerResult[index].innerHTML = `${inputs[index].value} KM Is ${parseFloat(result.toFixed(3))} Mi`
            } else {
                result = (Number(inputs[index].value) * 1.609344)
                spanAnswerResult[index].innerHTML = `${inputs[index].value} Mi Is ${result.toFixed(3)} KM`
            }
            break

        default:
            break;
    }
}








function changePlaceHolder(index) {
    console.log(index);
    let inputs = document.querySelectorAll('.inputs')
    Converts[index].changeValue = !Converts[index].changeValue
    // -------------------
    switch (index) {

        case 0:
            if (Converts[index].changeValue) {
                inputs[index].setAttribute('placeholder', 'F °  To  C °')
            } else {
                inputs[index].setAttribute('placeholder', 'C °  To  F °')
            }
            break;

        case 1:
            if (Converts[index].changeValue) {
                inputs[index].setAttribute('placeholder', 'CM  To  Feet')
            } else {
                inputs[index].setAttribute('placeholder', 'Feet  To  CM')
            }
            break

        case 2:
            if (Converts[index].changeValue) {
                inputs[index].setAttribute('placeholder', 'CM  To  Inch')
            } else {
                inputs[index].setAttribute('placeholder', 'Inch  To  CM')
            }
            break
        case 3:
            if (Converts[index].changeValue) {
                inputs[index].setAttribute('placeholder', 'M  To  CM')
            } else {
                inputs[index].setAttribute('placeholder', 'CM  To  M')
            }
            break
        case 4:
            if (Converts[index].changeValue) {
                inputs[index].setAttribute('placeholder', 'KM  To  MI')
            } else {
                inputs[index].setAttribute('placeholder', 'MI  To  KM')
            }
            break
        default:
            break;
    }



}


function openCloceAnswer(index) {
    let divA = document.querySelectorAll('.divA')
    divA.forEach(elem => {
        elem.setAttribute('style', 'height:0px')
    })
    setTimeout(() => {
        divA[index].setAttribute('style', `height:${divA[index].scrollHeight + 50}px`)
    }, 200)
}




