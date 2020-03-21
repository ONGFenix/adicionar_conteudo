class link {

    name;
    link;

    constructor(name, link){
        this.name = name;
        this.link = link;
    }

    update(name, link){
        this.name = name;
        this.link = link;
    }
}

let defaultLink = new link('Google', 'www.google.com');

let referencias = [];
let propostos = [];
let fixacao = [];

referencias.push(defaultLink);
propostos.push(defaultLink);
fixacao.push(defaultLink);

const referenciaEl = document.getElementById('referencia');
const fixacaoEl = document.getElementById('fixacao');
const propostoEl = document.getElementById('proposto');

const form = document.getElementById('form');

function renderReferencias(){
    referenciaEl.innerHTML = "";


    referencias.forEach((referencia, index) => {


        const li = document.createElement('li');
        const input1 = document.createElement('input');
        const input2 = document.createElement('input');
        const button = document.createElement('button');

        input1.type = 'text';
        input1.name = 'referenciaName'
        input1.placeholder = 'Título';
        input1.setAttribute('onblur', 'updateReferencia()');
        let name = (referencia.name)? referencia.name:"";
        input1.value = name;

        input2.type = 'text';
        input2.name = 'referenciaLink'
        input2.placeholder = 'link';
        input1.setAttribute('onblur', 'updateReferencia()');
        let link = (referencia.link)? referencia.link:"";
        input2.value = link;

        button.className = 'removeItem'
        button.type = 'button';
        button.setAttribute('onclick', `removeReferenciaItem(${index})`);
        button.innerText = '-';

        li.appendChild(input1);
        li.appendChild(input2);
        li.appendChild(button);
        referenciaEl.appendChild(li);
    });
    console.log(referencias);
}

function removeReferenciaItem(index){
    referencias.splice(index, 1);
    renderReferencias();
    return;
}

function addReferenciaItem(){
    let newReferencia = new link("", "");
    referencias.push(newReferencia);
    renderReferencias();
}

const updateReferencia = () =>{
    console.log("chamou");
    if(referencias.length>1){
        referencias.forEach((referencia, index) => {
            referencia.update(form.referenciaName[index].value, form.referenciaLink[index].value);
        })
    }else{
        referencias[0].update(form.referenciaName.value, form.referenciaLink.value);
    }
    
    renderReferencias();
}

renderReferencias();

function renderFixacao(){
    fixacaoEl.innerHTML = "";


    fixacao.forEach((fix, index) => {


        let li = document.createElement('li');
        let input1 = document.createElement('input');
        let input2 = document.createElement('input');
        let button = document.createElement('button');

        input1.type = 'text';
        input1.name = 'fixName'
        input1.placeholder = 'Título';
        input1.setAttribute('onblur', `updateFixacao()`)
        let name = (fix.name)? fix.name:"";
        input1.value = name;

        input2.type = 'text';
        input2.name = 'fixLink'
        input2.placeholder = 'link';
        input2.setAttribute('onblur', `updateFixacao()`)
        let link = (fix.link)? fix.link:"";
        input2.value = link;

        button.className = 'removeItem'
        button.type = 'button';
        button.setAttribute('onclick', `removeFixItem(${index})`);
        button.innerText = '-';

        li.appendChild(input1);
        li.appendChild(input2);
        li.appendChild(button);
        fixacaoEl.appendChild(li);
    });
    console.log(fixacao);
}

function removeFixItem(index){
    fixacao.splice(index, 1);
    renderFixacao();
    return;
}

function addFixItem(){
    let newFix = new link();
    fixacao.push(newFix);
    renderFixacao();
}

const updateFixacao = () =>{
    console.log("chamou");
    if(fixacao.length>1){
        fixacao.forEach((fix, index) => {
            fix.update(form.fixName[index].value, form.fixLink[index].value);
        })
    }else{
        fixacao[0].update(form.fixName.value, form.fixLink.value);
    }
    
    renderFixacao();
}

renderFixacao();

function renderPropostos(){
    propostoEl.innerHTML = "";


    propostos.forEach((proposto, index) => {


        let li = document.createElement('li');
        let input1 = document.createElement('input');
        let input2 = document.createElement('input');
        let button = document.createElement('button');

        input1.type = 'text';
        input1.name = 'propostoName'
        input1.placeholder = 'Título';
        input1.setAttribute('onblur', `updateProposto()`)
        let name = (proposto.name)? proposto.name:"";
        input1.value = name;

        input2.type = 'text';
        input2.name = 'propostoLink'
        input2.placeholder = 'link';
        input2.setAttribute('onblur', `updateProposto()`)
        let link = (proposto.link)? proposto.link:"";
        input2.value = link;

        button.className = 'removeItem'
        button.type = 'button';
        button.setAttribute('onclick', `removePropostoItem(${index})`);
        button.innerText = '-';

        li.appendChild(input1);
        li.appendChild(input2);
        li.appendChild(button);
        propostoEl.appendChild(li);
    });
    console.log(propostos);
}

function removePropostoItem(index){
    propostos.splice(index, 1);
    renderProposto();
    return;
}

function addPropostoItem(){
    let newProposto = new link();
    propostos.push(newProposto);
    renderPropostos();
}

const updateProposto = () =>{
    console.log("chamou");
    if(propostos.length>1){
        propostos.forEach((proposto, index) => {
            proposto.update(form.propostoName[index].value, form.propostoLink[index].value);
        })
    }else{
        propostos[0].update(form.propostoName.value, form.propostoLink.value);
    }
    
    renderPropostos();
}

renderPropostos();

const handleform = () => {
    let arq = {
        name: form.title.value,
        hyperlink: true,
        material: form.materialLink.value,
        referencias: referencias,
        exercicios:{
            fixacao:fixacao,
            propostos:propostos,
            discursivos:form.discursivo.value,
        },
    }
    arq = JSON.stringify(arq, undefined, 2);
    arq = arq.replace(/"([^"]+)":/g, '$1:');
    arq = arq+',';
    const pre = document.getElementById('json');
    pre.textContent = arq;
}