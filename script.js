    let form1 = document.getElementById('form1')
    let form2 = document.getElementById('form2')
    let form3 = document.getElementById('form3')
    let form4 = document.getElementById('form4')

    let inp1 = document.getElementById('input1')
    let inp2 = document.getElementById('input2')
    let inp3 = document.getElementById('input3')
    let inp4 = document.getElementById('input4')

    let output1 = document.getElementById('content1')
    let output2 = document.getElementById('content2')
    let output3 = document.getElementById('content3')
    let output4 = document.getElementById('content4')

//Form-1
    form1.addEventListener('submit',(e)=>{
        e.preventDefault()
        let value = inp1.value
        history(value)
    })

    const history =async(value)=>{
        try{
        let respose = await fetch(`https://disease.sh/v3/covid-19/historical/all?lastdays=${value}`)
        let data = await respose.json()
        let cases=data.cases
        let deaths=data.deaths
        let recovered=data.recovered
        
        for (const key in cases) {
            console.log('Cases');
            console.log(`${key}: ${cases[key]}`);
            let li1 = document.createElement('li')
            li1.innerText = `Cases = ${key}: ${cases[key]}`
            output1.append(li1)
        }
        for (const key in deaths) {
            console.log(`${key}: ${deaths[key]}`);
            let li2 = document.createElement('li')
            li2.innerText = `Deaths = ${key}: ${deaths[key]}`
            output1.append(li2)
        }
        for (const key in recovered) {
            console.log(`${key}: ${cases[recovered]}`);
            let li3= document.createElement('li')
            li3.innerText = `Recovered = ${key}: ${cases[recovered]}`
            output1.append(li3)
        }
    }catch(error){
        console.log(error);
    }
    }


//Form-2

form2.addEventListener('submit',(e)=>{
    e.preventDefault()
    let value = inp2.value
    worldWide(value)
})

const worldWide =async(value)=>{
try{
    let respose = await fetch(`https://disease.sh/v3/covid-19/${value}`)
    let data = await respose.json()
    
    for (const key in data) {
        console.log(`${key}: ${data[key]}`);
        let li1 = document.createElement('li')
        li1.innerText = `${key}: ${data[key]}`
        output2.append(li1)
    }
}catch(error){
    console.log(error);
}
}



//Form-3

form3.addEventListener('submit',(e)=>{
    e.preventDefault()
    let value = inp3.value
    countries(value)
})

const countries =async(value)=>{
try{
    let respose = await fetch(`https://disease.sh/v3/covid-19/countries/${value}`)
    let data = await respose.json()
    for (const key in data) {
        console.log(`${key}: ${data[key]}`);
        let li1 = document.createElement('li')
        li1.innerText = `${key}: ${data[key]}`
        output3.append(li1)
    }
}catch(error){
    console.log(error);
}
}



//Form-4

form4.addEventListener('submit',(e)=>{
    e.preventDefault()
    let value = inp4.value
    vaccines(value)
})

const vaccines =async(value)=>{
try{
    let respose = await fetch(`https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=${value}`)
    let data = await respose.json()
    for(let i=0;i<data.length;i++){
        let li1 = document.createElement('li')
        let li2 = document.createElement('li')
        li1.innerText = `Country = ${data[i].country}`
        for(let o in data[i].timeline){
            li2.innerText = `Timeline = ${o}:${data[i].timeline[o]}` 
        }
        output4.append(li1,li2)
    }
}catch(error){
    console.log(error);
}
}




















