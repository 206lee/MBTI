// const

const startcontainer = document.querySelector("#start-container")
const qna1 = document.querySelector("#qna1")
const qna2 = document.querySelector("#qna2")
const qna3 = document.querySelector("#qna3")
const qna4 = document.querySelector("#qna4")
const qna5 = document.querySelector("#qna5")
const qna6 = document.querySelector("#qna6")
const qna7 = document.querySelector("#qna7")
const qna8 = document.querySelector("#qna8")
const qna9 = document.querySelector("#qna9")
const qna10 = document.querySelector("#qna10")
const qna11 = document.querySelector("#qna11")
const qna12 = document.querySelector("#qna12")
const qna13 = document.querySelector("#qna13")
const qna14 = document.querySelector("#qna14")
const qna15 = document.querySelector("#qna15")
const qna16 = document.querySelector("#qna16")
const qna17 = document.querySelector("#qna17")
const qna18 = document.querySelector("#qna18")
const qna19 = document.querySelector("#qna19")
const qna20 = document.querySelector("#qna20")
const qna21 = document.querySelector("#qna21")
const qna22 = document.querySelector("#qna22")
const qna23 = document.querySelector("#qna23")
const qna24 = document.querySelector("#qna24")
const qna25 = document.querySelector("#qna25")
const qna26 = document.querySelector("#qna26")
const qna27 = document.querySelector("#qna27")
const qna28 = document.querySelector("#qna28")

const loading = document.querySelector("#loading")


// button
const startbtn = document.querySelector("#start-btn")

const btn1n1 = document.querySelector("#btn1n1")
const btn1n2 = document.querySelector("#btn1n2")
const btn2n1 = document.querySelector("#btn2n1")
const btn2n2 = document.querySelector("#btn2n2")
const btn3n1 = document.querySelector("#btn3n1")
const btn3n2 = document.querySelector("#btn3n2")
const btn4n1 = document.querySelector("#btn4n1")
const btn4n2 = document.querySelector("#btn4n2")
const btn5n1 = document.querySelector("#btn5n1")
const btn5n2 = document.querySelector("#btn5n2")
const btn6n1 = document.querySelector("#btn6n1")
const btn6n2 = document.querySelector("#btn6n2")
const btn7n1 = document.querySelector("#btn7n1")
const btn7n2 = document.querySelector("#btn7n2")
const btn8n1 = document.querySelector("#btn8n1")
const btn8n2 = document.querySelector("#btn8n2")
const btn9n1 = document.querySelector("#btn9n1")
const btn9n2 = document.querySelector("#btn9n2")
const btn10n1 = document.querySelector("#btn10n1")
const btn10n2 = document.querySelector("#btn10n2")
const btn11n1 = document.querySelector("#btn11n1")
const btn11n2 = document.querySelector("#btn11n2")
const btn12n1 = document.querySelector("#btn12n1")
const btn12n2 = document.querySelector("#btn12n2")
const btn13n1 = document.querySelector("#btn13n1")
const btn13n2 = document.querySelector("#btn13n2")
const btn14n1 = document.querySelector("#btn14n1")
const btn14n2 = document.querySelector("#btn14n2")
const btn15n1 = document.querySelector("#btn15n1")
const btn15n2 = document.querySelector("#btn15n2")
const btn16n1 = document.querySelector("#btn16n1")
const btn16n2 = document.querySelector("#btn16n2")
const btn17n1 = document.querySelector("#btn17n1")
const btn17n2 = document.querySelector("#btn17n2")
const btn18n1 = document.querySelector("#btn18n1")
const btn18n2 = document.querySelector("#btn18n2")
const btn19n1 = document.querySelector("#btn19n1")
const btn19n2 = document.querySelector("#btn19n2")
const btn20n1 = document.querySelector("#btn20n1")
const btn20n2 = document.querySelector("#btn20n2")
const btn21n1 = document.querySelector("#btn21n1")
const btn21n2 = document.querySelector("#btn21n2")
const btn22n1 = document.querySelector("#btn22n1")
const btn22n2 = document.querySelector("#btn22n2")
const btn23n1 = document.querySelector("#btn23n1")
const btn23n2 = document.querySelector("#btn23n2")
const btn24n1 = document.querySelector("#btn24n1")
const btn24n2 = document.querySelector("#btn24n2")
const btn25n1 = document.querySelector("#btn25n1")
const btn25n2 = document.querySelector("#btn25n2")
const btn26n1 = document.querySelector("#btn26n1")
const btn26n2 = document.querySelector("#btn26n2")
const btn27n1 = document.querySelector("#btn27n1")
const btn27n2 = document.querySelector("#btn27n2")
const btn28n1 = document.querySelector("#btn28n1")
const btn28n2 = document.querySelector("#btn28n2")

// MBTI

let EI = 0
let SN = 0
let TF = 0
let JP = 0

// click
startbtn.addEventListener('click',()=>{
    startcontainer.style.display = "none"
    qna1.style.display = "block"
    
})

btn1n1.addEventListener('click', ()=>{
    qna1.style.display = "none"
    qna2.style.display = "block"
    EI -=1
})
btn1n2.addEventListener('click', ()=>{
    qna1.style.display = "none"
    qna2.style.display = "block"
    EI +=1
})
btn2n1.addEventListener('click', ()=>{
    qna2.style.display = "none"
    qna3.style.display = "block"
    SN -=1
})
btn2n2.addEventListener('click', ()=>{
    qna2.style.display = "none"
    qna3.style.display = "block"
    SN +=1
})
btn3n1.addEventListener('click', ()=>{
    qna3.style.display = "none"
    qna4.style.display = "block"
    TF +=1
})
btn3n2.addEventListener('click', ()=>{
    qna3.style.display = "none"
    qna4.style.display = "block"
    TF -=1
})
btn4n1.addEventListener('click', ()=>{
    qna4.style.display = "none"
    qna5.style.display = "block"
    JP +=1
})
btn4n2.addEventListener('click', ()=>{
    qna4.style.display = "none"
    qna5.style.display = "block"
    JP -=1
   
})
btn5n1.addEventListener('click', ()=>{
    qna5.style.display = "none"
    qna6.style.display = "block"
    EI +=1
})
btn5n2.addEventListener('click', ()=>{
    qna5.style.display = "none"
    qna6.style.display = "block"
    EI -=1
})
btn6n1.addEventListener('click', ()=>{
    qna6.style.display = "none"
    qna7.style.display = "block"
    SN +=1
})
btn6n2.addEventListener('click', ()=>{
    qna6.style.display = "none"
    qna7.style.display = "block"
    SN -=1
})
btn7n1.addEventListener('click', ()=>{
    qna7.style.display = "none"
    qna8.style.display = "block"
    TF +=1
})
btn7n2.addEventListener('click', ()=>{
    qna7.style.display = "none"
    qna8.style.display = "block"
    TF -=1
})
btn8n1.addEventListener('click', ()=>{
    qna8.style.display = "none"
    qna9.style.display = "block"
    JP +=1
})
btn8n2.addEventListener('click', ()=>{
    qna8.style.display = "none"
    qna9.style.display = "block"
    JP -=1
})
btn9n1.addEventListener('click', ()=>{
    qna9.style.display = "none"
    qna10.style.display = "block"
    EI +=1
})
btn9n2.addEventListener('click', ()=>{
    qna9.style.display = "none"
    qna10.style.display = "block"
    EI -=1
})
btn10n1.addEventListener('click', ()=>{
    qna10.style.display = "none"
    qna11.style.display = "block"
    SN -=1
})
btn10n2.addEventListener('click', ()=>{
    qna10.style.display = "none"
    qna11.style.display = "block"
    SN +=1
})
btn11n1.addEventListener('click', ()=>{
    qna11.style.display = "none"
    qna12.style.display = "block"
    TF +=1
})
btn11n2.addEventListener('click', ()=>{
    qna11.style.display = "none"
    qna12.style.display = "block"
    TF -=1
})
btn12n1.addEventListener('click', ()=>{
    qna12.style.display = "none"
    qna13.style.display = "block"
    JP +=1
})
btn12n2.addEventListener('click', ()=>{
    qna12.style.display = "none"
    qna13.style.display = "block"
    JP -=1
})
btn13n1.addEventListener('click', ()=>{
    qna13.style.display = "none"
    qna14.style.display = "block"
    EI -=1
})
btn13n2.addEventListener('click', ()=>{
    qna13.style.display = "none"
    qna14.style.display = "block"
    EI +=1
})
btn14n1.addEventListener('click', ()=>{
    qna14.style.display = "none"
    qna15.style.display = "block"
    SN +=1
})
btn14n2.addEventListener('click', ()=>{
    qna14.style.display = "none"
    qna15.style.display = "block"
    SN -=1
})
btn15n1.addEventListener('click', ()=>{
    qna15.style.display = "none"
    qna16.style.display = "block"
    TF +=1
})
btn15n2.addEventListener('click', ()=>{
    qna15.style.display = "none"
    qna16.style.display = "block"
    TF -=1
})
btn16n1.addEventListener('click', ()=>{
    qna16.style.display = "none"
    qna17.style.display = "block"
    JP -=1
})
btn16n2.addEventListener('click', ()=>{
    qna16.style.display = "none"
    qna17.style.display = "block"
    JP +=1
})
btn17n1.addEventListener('click', ()=>{
    qna17.style.display = "none"
    qna18.style.display = "block"
    EI -=1
})
btn17n2.addEventListener('click', ()=>{
    qna17.style.display = "none"
    qna18.style.display = "block"
    EI +=1
})
btn18n1.addEventListener('click', ()=>{
    qna18.style.display = "none"
    qna19.style.display = "block"
    SN -=1
})
btn18n2.addEventListener('click', ()=>{
    qna18.style.display = "none"
    qna19.style.display = "block"
    SN +=1
})
btn19n1.addEventListener('click', ()=>{
    qna19.style.display = "none"
    qna20.style.display = "block"
    TF -=1
})
btn19n2.addEventListener('click', ()=>{
    qna19.style.display = "none"
    qna20.style.display = "block"
    TF +=1
})
btn20n1.addEventListener('click', ()=>{
    qna20.style.display = "none"
    qna21.style.display = "block"
    JP +=1
})
btn20n2.addEventListener('click', ()=>{
    qna20.style.display = "none"
    qna21.style.display = "block"
    JP -=1
})
btn21n1.addEventListener('click', ()=>{
    qna21.style.display = "none"
    qna22.style.display = "block"
    EI -=1
})
btn21n2.addEventListener('click', ()=>{
    qna21.style.display = "none"
    qna22.style.display = "block"
    EI +=1
})
btn22n1.addEventListener('click', ()=>{
    qna22.style.display = "none"
    qna23.style.display = "block"
    SN +=1
})
btn22n2.addEventListener('click', ()=>{
    qna22.style.display = "none"
    qna23.style.display = "block"
    SN -=1
})
btn23n1.addEventListener('click', ()=>{
    qna23.style.display = "none"
    qna24.style.display = "block"
    TF -=1
})
btn23n2.addEventListener('click', ()=>{
    qna23.style.display = "none"
    qna24.style.display = "block"
    TF +=1
})
btn24n1.addEventListener('click', ()=>{
    qna24.style.display = "none"
    qna25.style.display = "block"
    JP +=1
})
btn24n2.addEventListener('click', ()=>{
    qna24.style.display = "none"
    qna25.style.display = "block"
    JP -=1
})
btn25n1.addEventListener('click', ()=>{
    qna25.style.display = "none"
    qna26.style.display = "block"
    EI +=1
})
btn25n2.addEventListener('click', ()=>{
    qna25.style.display = "none"
    qna26.style.display = "block"
    EI -=1
})
btn26n1.addEventListener('click', ()=>{
    qna26.style.display = "none"
    qna27.style.display = "block"
    SN +=1
})
btn26n2.addEventListener('click', ()=>{
    qna26.style.display = "none"
    qna27.style.display = "block"
    SN -=1
})
btn27n1.addEventListener('click', ()=>{
    qna27.style.display = "none"
    qna28.style.display = "block"
    TF -=1
})
btn27n2.addEventListener('click', ()=>{
    qna27.style.display = "none"
    qna28.style.display = "block"
    TF +=1
})
let timerId = false;
let timer  = 0;
btn28n1.addEventListener('click', ()=>{
    qna28.style.display = "none"
    loading.style.display = "flex"
    JP -=1
    timerId = true;
    main()
})
btn28n2.addEventListener('click', ()=>{
    qna28.style.display = "none"
    loading.style.display = "flex"
    JP +=1
    timerId = true;
    main()
})

// MBTI
const ISTJ = document.querySelector("#ISTJ");
const ISFJ = document.querySelector("#ISFJ");
const INFJ = document.querySelector("#INFJ");
const INTJ = document.querySelector("#INTJ");

const ISTP = document.querySelector("#ISTP");
const ISFP = document.querySelector("#ISFP");
const INFP = document.querySelector("#INFP");
const INTP = document.querySelector("#INTP");

const ESTP = document.querySelector("#ESTP");
const ESFP = document.querySelector("#ESFP");
const ENFP = document.querySelector("#ENFP");
const ENTP = document.querySelector("#ENTP");

const ESTJ = document.querySelector("#ESTJ");
const ESFJ = document.querySelector("#ESFJ");
const ENFJ = document.querySelector("#ENFJ");
const ENTJ = document.querySelector("#ENTJ");

function main(){
    if(timer < 300){
        requestAnimationFrame(main)
        timer++;
    }
    if(timer === 300){
        loading.style.display = "none"
        document.querySelector("#Result").style.display = "flex"
        if(EI > 0){
            document.querySelector("#EI-result").innerHTML = "E"
        }else if(EI < 0){
            document.querySelector("#EI-result").innerHTML = "I"
        }
        if(SN > 0){
            document.querySelector("#SN-result").innerHTML = "S"
        }else if(SN < 0){
            document.querySelector("#SN-result").innerHTML = "N"
        }if(TF > 0){
            document.querySelector("#TF-result").innerHTML = "T"
        }else if(TF < 0){
            document.querySelector("#TF-result").innerHTML = "F"
        }if(JP > 0){
            document.querySelector("#JP-result").innerHTML = "J"
        }else if(JP < 0){
            document.querySelector("#JP-result").innerHTML = "P"
        }
    }
    if(EI < 0){
        if(SN > 0){
            if(TF > 0){
                if(JP > 0){
                    ISTJ.style.display = "flex"
                }
                if(JP < 0){
                    ISTP.style.display = "flex"
                }
            }else if(TF < 0){
                if(JP > 0){
                    ISFJ.style.display = "flex"
                }
                if(JP < 0){
                    ISFP.style.display = "flex"
                }
            }
        }else if(SN < 0){
            if(TF > 0){
                if(JP > 0){
                    INTJ.style.display = "flex"
                }
                if(JP < 0){
                    INTP.style.display = "flex"
                }
            }else if(TF < 0){
                if(JP > 0){
                    INFJ.style.display = "flex"
                }
                if(JP < 0){
                    INFP.style.display = "flex"
                }
            }
        }
    }else  if(EI > 0){
        if(SN > 0){
            if(TF > 0){
                if(JP > 0){
                    ESTJ.style.display = "flex"
                }
                if(JP < 0){
                    ESTP.style.display = "flex"
                }
            }else if(TF < 0){
                if(JP > 0){
                    ESFJ.style.display = "flex"
                }
                if(JP < 0){
                    ESFP.style.display = "flex"
                }
            }
        }else if(SN < 0){
            if(TF > 0){
                if(JP > 0){
                    ENTJ.style.display = "flex"
                }
                if(JP < 0){
                    ENTP.style.display = "flex"
                }
            }else if(TF < 0){
                if(JP > 0){
                    ENFJ.style.display = "flex"
                }
                if(JP < 0){
                    ENFP.style.display = "flex"
                }
            }
        }
    }
}
