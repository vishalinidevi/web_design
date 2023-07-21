const button = document.querySelector('button')
//event listener
let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('wrapper').appendChild(resultdiv)

button.addEventListener('click',displayStats)
function displayStats()
{
     const input = document.getElementById('input')
     const city =input.options[input.selectedIndex].value
     let popoulation = 0,literacyRate=0,language=0
     switch(city)
     {
        case 'Bengaluru':
            popoulation = 464765
            language = 'Kanada'
            break
        case 'Chennai':
            popoulation = 235465
            language = 'Tamil'
            break
        case 'Mumbai':
            popoulation = 32547856
            language = 'Hindi'
            break
        case 'Delhi':
            popoulation = 457864783
            language = 'Hindi'
            break

        
     }
     let text = `The Indian city ${city}  has a ${popoulation}.Lnaguage spoken is ${language}`
     
     document.getElementById('result').innerHTML = text
}