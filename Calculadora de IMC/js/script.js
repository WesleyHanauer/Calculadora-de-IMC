let table = document.getElementById("tabela")
let thead = document.createElement("thead")
let tbody = document.createElement("tbody")

table.setAttribute("id","table")
thead.setAttribute("id","thead")
tbody.setAttribute("id","tbody")

table.appendChild(thead)
table.appendChild(tbody)



document.getElementById("body").appendChild(table);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Nome"
let heading_2 = document.createElement('th');
heading_2.innerHTML = "IMC"
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Classificação"

row_1.setAttribute("id","colu1")
heading_1.setAttribute("id","head1")
heading_2.setAttribute("id","head2")
heading_3.setAttribute("id","head3")

row_1.appendChild(heading_1)
row_1.appendChild(heading_2)
row_1.appendChild(heading_3)
thead.appendChild(row_1)

function enviar(){

    let nomeInput=document.getElementById("nome").value
    let alturaInput=document.getElementById("altura").value
    let pesoInput=document.getElementById("peso").value

    let imc=(pesoInput/alturaInput**2).toFixed(1)

    if(imc<18.5){
        classificacao="Abaixo do Peso"
    }
    else if(imc>=18.5&&imc<24.9){
        classificacao="Normal"
    }
    else if(imc>=25&&imc<29.9){
        classificacao="Sobrepeso"
    }
    else if(imc>=30&&imc<34.9){
        classificacao="Obesidade Grau I"
    }
    else if(imc>=35&&imc<39.9){
        classificacao="Obesidade Grau II"
    }
    else if(imc>40){
        classificacao="Obesidade mórbida"
    }

let coluna2 = document.createElement('tr')
let row_2_data_1 = document.createElement('td')
row_2_data_1.innerHTML = nomeInput
let row_2_data_2 = document.createElement('td')
row_2_data_2.innerHTML = imc
let row_2_data_3 = document.createElement('td')
row_2_data_3.innerHTML = classificacao

coluna2.appendChild(row_2_data_1)
coluna2.appendChild(row_2_data_2)
coluna2.appendChild(row_2_data_3)
tbody.appendChild(coluna2)

coluna2.setAttribute("id","coluna")
row_2_data_3.setAttribute("id","data3")
row_2_data_2.setAttribute("id","data2")
row_2_data_1.setAttribute("id","data1")
}