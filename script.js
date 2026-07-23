const files = {

    1:"data/promoter_1.json",

    2:"data/promoter_2.json",

    3:"data/promoter_3.json",

    4:"data/promoter_4.json"

};


let masterData=[];


async function loadData(period){

    const response=await fetch(files[period]);

    const json=await response.json();

    masterData=json.data;

    buildTable(masterData);

}


function buildTable(data){

    let tbody=document.querySelector("#stockTable tbody");

    tbody.innerHTML="";

    data.forEach(row=>{

        let tr=document.createElement("tr");

        tr.innerHTML=`

<td>

<div class="company">

<img
src="logos/${row.symbol}.png"
onerror="this.src='logos/default.png'">

<div>

<div class="company-name">

${row.companyName}

</div>

<div class="symbol">

${row.symbol}

</div>

</div>

</div>

</td>

<td>

${row.promoterName}

</td>

<td>

${row.creditDateFrom}

</td>

<td>

${Number(row.nosharesAcquired).toLocaleString()}

</td>

<td>

${row.persharesPrior}%

</td>

<td>

${row.persharesAfterAcq}%

</td>

<td>

<span class="badge-buy">

Buy

</span>

</td>

`;

        tbody.appendChild(tr);

    });

}



document.getElementById("periodSelect").addEventListener("change",function(){

    loadData(this.value);

});


document.getElementById("searchInput").addEventListener("keyup",function(){

    let txt=this.value.toLowerCase();

    let filtered=masterData.filter(x=>

        x.companyName.toLowerCase().includes(txt)

        ||

        x.symbol.toLowerCase().includes(txt)

        ||

        x.promoterName.toLowerCase().includes(txt)

    );

    buildTable(filtered);

});


loadData(1);
