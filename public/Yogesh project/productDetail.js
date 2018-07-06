var prodDetails = [];
var count=0;
var flag=0;
var track =[];
var track2 =[];
var atr =["f","s","t","fo","ff"];
var v1=[];
var j=0;
var divEl1;
var price=0;
function loadProdDetails(pdetails,x) {
	   track[x]=x;
       console.log(pdetails);
       var divBlock = $("<div></div>").addClass("block");       
       var ulTag = $("<ul></ul>");
       var li4 = $("<li></li>");      
       var imgtag = $("<img />").attr("src", pdetails.imageurl).addClass("im");
        imgtag.css({height:'100px',width:'100px'});
       li4.append(imgtag);
       ulTag.append(li4);
       var li1 = $("<li></li>").html("<b>Product Name:</b> " + pdetails.name);
       ulTag.append(li1);
       var li2 = $("<li></li>").html("<b>Product Price:</b> " + pdetails.price);
       ulTag.append(li2);
       var li3 = $("<li></li>").html("<b>Product Manufacturer:</b> " + pdetails.manu);
       ulTag.append(li3);
       var li5 = $("<li></li>").html("<b>Product Detail:</b> " + pdetails.detail);
       ulTag.append(li5);      
       divBlock.append(ulTag);       
       var cart = $("<input></input>").attr("src", "image/add-to-cart-button.jpg").addClass("btn");   
       var buy = $("<input></input>").attr("src", "image/buy-now-button-4.jpg").addClass("btn");   
       cart.attr("type","image");
       buy.attr("type","image");
       var b1 =cart.attr("id","bblc01");
       var b2 =buy.attr("id","bblc02");
       var b3 = b1.addClass(atr[x]);       
       b1.append(cart);
       b2.append(buy);      
       console.log(b3);       
       divBlock.append(b3);
       divBlock.append(b2);
       $("#productContainer").append(divBlock);     
   b1.click(function(){
         $("#proceed").show();
         console.log("got it");
         count++;
         var a1 = $("#h1");
         a1.html(count + " <b>item added to cart</b>");
         $(".header").append(a1);
         var ad =$("<img/>").attr("src","image/added-to-cart.jpg").css({height:'50px',width:'90px'});
         var iCon = $("<div></div>").attr("id","addedToCart");
          var ad1 =iCon.append(ad);
         divBlock.append(ad1);
         console.log(Event);
         v1[j++] = b1.attr("class");
         console.log(v1);
         
      divEl1 = $("<div></div>").addClass("popUp1");
            for(i=0;i<=j;i++){
                   if(v1[i]== 'btn f'){
                         var p1=$("<p></p>").html("<b>Product Name:</b> " + prodDetails[0].name);
                         divEl1.append(p1);
                         var p2 =$("<p></p>").html("<b>Product Price:</b> " + prodDetails[0].price);
                         divEl1.append(p2);
                         price = price+parseInt(prodDetails[0].price);
                      }                  
                      if(v1[i]=='btn s'){
                         var p3=$("<p></p>").html("<b>Product Name:</b> " + prodDetails[1].name);
                         divEl1.append(p3);
                         var p4 =$("<p></p>").html("<b>Product Price:</b> " + prodDetails[1].price);
                         divEl1.append(p4);
                          price = price+parseInt(prodDetails[1].price);
                      }                  
                      if(v1[i]=='btn t'){
                         var p5=$("<p></p>").html("<b>Product Name:</b> " + prodDetails[2].name);
                         divEl1.append(p5);
                         var p6 =$("<p></p>").html("<b>Product Price:</b> " + prodDetails[2].price);
                         divEl1.append(p6);
                          price = price+parseInt(prodDetails[1].price);
                      }                  
                      if(v1[i]=='btn fo'){
                         var p7=$("<p></p>").html("<b>Product Name:</b> " + prodDetails[3].name);
                         divEl1.append(p7);
                         var p8 =$("<p></p>").html("<b>Product Price:</b> " + prodDetails[3].price);
                         divEl1.append(p8);
                          price = price+parseInt(prodDetails[1].price);
                      }
                      if(v1[i]=='btn ff'){
                         var p9=$("<p></p>").html("<b>Product Name:</b> " + prodDetails[4].name);
                         divEl1.append(p9);
                         var p10 =$("<p></p>").html("<b>Product Price:</b> " + prodDetails[4].price);
                         divEl1.append(p10);
                          price = price+parseInt(prodDetails[1].price);
                      }                 
               }         
      });
       
      $("#proceed").click(function(){
                     console.log("inside");
                 loc1 = $("<div></div>").addClass("locB");  
              
                   var pp = $("#prc").html("<b>Total Price</b>: "+price).show();
                  divEl1.append(pp);
                    var b3 =$("#bblc03").show();
                   divEl1.append(b3);
          $("#container02").append(loc1); 
                  loc1.append(divEl1);         
            var close1 = $("<img></img>").addClass("clsButton");
         close1.attr("src","image/red-close-button.png");
         divEl1.append(close1);
         close1.click(function(){
                     divEl1.hide();
                      loc1.remove(); 
                     });                         
         });        
        b2.click(function(){
         window.open("buyNow.html");
      });
      
      ulTag.click(function(){      
      var divEl = $("<div></div>").addClass("popUp");
      var p1=$("<p></p>").html("<b>Product Name:</b> " + pdetails.name);
      divEl.append(p1);
      var p2 =$("<p></p>").html("<b>Product Price:</b> " + pdetails.price);
      divEl.append(p2);
      var p3=$("<p></p>").html("<b>Product Manufacturer:</b> " + pdetails.manu);
      divEl.append(p3);
      var p4 =$("<p></p>").html("<b>HighLights:</b>");
      divEl.append(p4);
       var p5 =$("<p></p>").html(pdetails.Highlights01);
      divEl.append(p5);   
      var p6 =$("<p></p>").html(pdetails.Highlights02);
      divEl.append(p6);   
      var p7 =$("<p></p>").html(pdetails.Highlights03);
      divEl.append(p7);   
      var p8 =$("<p></p>").html(pdetails.Highlights04);
      divEl.append(p8);    
      var p9 =$("<p></p>").html("<b> Seller </b> " + pdetails.seller);
      divEl.append(p8);    
      var p10 =$("<p></p>").html("<b> Payment :</b>");
      divEl.append(p10);
      var p11 =$("<p></p>").html(pdetails.payment01);
      divEl.append(p11);  
        var p12 =$("<p></p>").html(pdetails.payment02);
      divEl.append(p12);   
         var p13 =$("<p></p>").html(pdetails.payment03);
      divEl.append(p13);  
         var p14 =$("<p></p>").html("<b>Product Description :</b>" + pdetails.description);
      divEl.append(p14);           
         var loc = $("<div></div>").addClass("locB");  
        $("#container02").append(loc);         
         loc.append(divEl);         
        var close = $("<img></img>").addClass("clsButton");
         close.attr("src","image/red-close-button.png");
         divEl.append(close);
         close.click(function(){
                     divEl.hide();
                      loc.remove(); 
                     });                
});    
}
function loadDetail01(){
      $("#productContainer").empty();
       /*$("#h1").empty();*/
      flag=1; 
      $.ajax({
		url:'products.json',
		method: 'GET',
		dataType: 'JSON',
		success: function(res) {
			console.log("success communication");
			console.log(res);
			prodDetails = res.prodDetails;
			showProdDetails(prodDetails);
            
		},
		error: function(err) {
			console.log("Error");
        }
	});
   
}
   
   function loadDetail02() {
      
      $("#productContainer").empty();
      $.ajax({
		url:'products.json',
		method: 'GET',
		dataType: 'JSON',
		success: function(res) {
			console.log("success communication");
			console.log(res);
			prodDetails = res.prodDetails;
			showProdDetails();
		},
		error: function(err) {
			console.log("Error");
		}
	});
      
}
function showProdDetails(prodDetails){
	for (var i = 0 ; i < prodDetails.length; i++) {
		loadProdDetails(prodDetails[i]);	
	}

}
