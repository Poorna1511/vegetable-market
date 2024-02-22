var array=[
    {
        img:'https://www.bigbasket.com/media/uploads/p/m/10000067_23-fresho-capsicum-green.jpg?tr=w-1920,q=80',
        title:'Capsicum-Green(Loose)',
        price:48
    },
    {
        img:'https://www.bigbasket.com/media/uploads/p/m/10000070_15-fresho-carrot-orange.jpg?tr=w-1920,q=80',
        title:'Carrot-Orange',
        price:66
    },
    {
        img:'https://www.bigbasket.com/media/uploads/p/m/10000074_19-fresho-cauliflower.jpg?tr=w-1920,q=80',
        title:'Cauliflower',
        price:19
    },
    {
        img:'https://www.bigbasket.com/media/uploads/p/s/10000326_14-fresho-coriander-leaves.jpg?tr=w-132,q=80,h-132',
        title:'Coriander Leaves',
        price:74
    },
    {
        img:'https://www.bigbasket.com/media/uploads/p/m/40077518_1-fresho-cucumber.jpg?tr=w-1920,q=80',
        title:'Cucumber',
        price:490
    },
    {
        img:'https://www.bigbasket.com/media/uploads/p/m/10000142_17-fresho-ladies-finger.jpg?tr=w-1920,q=80',
        title:'Ladies Fingers(Loose)',
        price:49
    },
    {
        img:'https://www.bigbasket.com/media/uploads/p/m/10000150_19-fresho-onion.jpg?tr=w-1920,q=80',
        title:'Onion',
        price:185
    },
    {
        img:'https://www.bigbasket.com/media/uploads/p/m/40048459_8-fresho-potato-new-crop.jpg?tr=w-1920,q=80',
        title:'Potato(Loose)',
        price:90
    },
    {
        img:'https://www.bigbasket.com/media/uploads/p/s/10000203_16-fresho-tomato-local.jpg?tr=w-132,q=80,h-132',
        title:'Tomato-Local(Loose)',
        price:37.23
    },
    {
        img:'https://www.bigbasket.com/media/uploads/p/s/40089742_2-fresho-beans-haricot.jpg?tr=w-132,q=80,h-132',
        title:'Beans-Haricot(Loose)',
        price:39
    },
    {
        img:'https://www.bigbasket.com/media/uploads/p/m/40085597_6-bigbasket-baby-wipes-fresh-no-paraben-double-moisturizing.jpg?tr=w-1920,q=80',
        title:'Baby wipes',
        price:40
    }

];

var updated_array=[...array];
var cardss=document.getElementById("cardss");

function displayCards(parr){
    cardss.innerHTML="";
    parr?.map(item=>{
        var card=document.createElement('div')
        card.classList.add("card","col-sm-4","col-11","col-md-3","col-xl-2","m-2","my-3");
        var img=document.createElement("img");
        img.src=item.img;
        img.classList.add("card-img-top", "container-fluid",);
        card.appendChild(img);
        var card_body=document.createElement('div');
        card_body.classList.add("card-body");
        var h5=document.createElement('h5');
        h5.classList.add("card-title","mb-3");
        h5.innerHTML=item.title;
        card_body.appendChild(h5);
        var select=document.createElement('select');
        for(var i=1;i<6;i++){
            var option=document.createElement('option');
            option.innerHTML=i;
            select.appendChild(option);
        }
        select.classList.add("my-1" ,"w-100")
        card_body.appendChild(select);


        var p=document.createElement('p');
        p.classList.add("mb-3");
        p.innerHTML="Rs"+item.price;
        card_body.appendChild(p);


        var innerdiv=document.createElement('div');
        innerdiv.classList.add("d-flex","justify-content-center");
        var innerdiv2=document.createElement('div');
        innerdiv2.classList.add("d-flex","w-100","justify-content-around");
        var i=document.createElement('i'); 
        i.classList.add("fa-regular","fa-bookmark","p-2","rounded","border","mx-1");
        var a=document.createElement('a');
        a.innerHTML="Add";
        a.classList.add("btn","btn-outline-danger","w-75");
        innerdiv2.appendChild(i);
        innerdiv2.appendChild(a);
        innerdiv.appendChild(innerdiv2);
        card_body.appendChild(innerdiv);
        card.appendChild(card_body);
        cardss.appendChild(card);
    });

}


function search(event){
    var searchbox=document.getElementById("searchbox");
   if(searchbox.value.trim() !== ""){
    updated_array=array.filter(item=>{
        return item.title.toLowerCase().includes(searchbox.value.toLowerCase())
    });
    displayCards(updated_array);
    }
    else{
        updated_array=[...array];
        displayCards(updated_array);
    }
   
    event.preventDefault();
}


document.addEventListener('DOMContentLoaded', function() {
    displayCards(array);
  });